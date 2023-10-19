using StruCal.Shared.Extensions;
using System;

namespace StruCal.Calculators.ShearReinforcement
{
    public class ShearReinforcementCalculator
    {
        private ShearReinforcementInput _inputData;
        private ShearReinforcementOutput _outputData;
        private double sigmacp;
        private double fcd;

        public ShearReinforcementOutput CalculateShearReinforcement(ShearReinforcementInput inputData)
        {
            _inputData = inputData;
            _outputData = new ShearReinforcementOutput();

            CalculateCommonValues();
            CalculateMembersNotRequiringShearReinforcement();
            ClaculateMembersRequiringShearReinforcement();

            return _outputData;
        }

        private void CalculateCommonValues()
        {
            sigmacp = (_inputData.Ned / (_inputData.H * _inputData.Bw)).Round();
            fcd = (_inputData.Fck / _inputData.GammaC).Round();

            _outputData.Fcd = fcd;
            _outputData.Sigmacp = sigmacp;
        }

        private void CalculateMembersNotRequiringShearReinforcement()
        {
            var k = Math.Min(1 + Math.Sqrt(200 / _inputData.D), 2d).Round();
            var ro1 = (_inputData.Asl / (_inputData.Bw * _inputData.D)).Round();

            var Crdc = (0.18 / _inputData.GammaC).Round();
            var vmin = (0.035 * Math.Pow(k, 3 / 2) * Math.Sqrt(_inputData.Fck)).Round();
            var Vrdc1 = ((Crdc * k * Math.Pow(100 * ro1 * _inputData.Fck, 1 / 3) + _inputData.K1 * sigmacp) * _inputData.Bw * _inputData.D).Round();
            var Vrdc2 = ((vmin + _inputData.K1 * sigmacp) * _inputData.Bw * _inputData.D).Round();
            var Vrdc = Math.Max(Vrdc1, Vrdc2);

            _outputData.K = k;
            _outputData.Ro1 = ro1;
            _outputData.Crdc = Crdc;
            _outputData.Vmin = vmin;
            _outputData.Vrdc1 = Vrdc1;
            _outputData.Vrdc2 = Vrdc2;
            _outputData.Vrdc = Vrdc;
        }

        private void ClaculateMembersRequiringShearReinforcement()
        {
            var v1 = (0.6 * (1 - _inputData.Fck / 250)).Round();
            var z = (0.9 * _inputData.D).Round();
            var alfaCw = GetAlfaCw(fcd, sigmacp);
            var fywd = (_inputData.Fywk / _inputData.GammaS).Round();
            var theta = (0.5 * Math.Asin((2 * _inputData.Ved) / (alfaCw * _inputData.Bw * z * v1 * fcd))).Round();
            var noSolution = false;
            var cotTheta = 0.0;
            var cotThetaCalcs = 0.0;
            var tanTheta = 0.0;
            var Vrdmax = 0.0;
            var Vrds = 0.0;
            if (theta.IsNaN())
            {
                noSolution = true;
            }
            else
            {
                noSolution = false;
                cotTheta = (Math.Pow(Math.Tan(theta), -1)).Round();
                cotThetaCalcs = cotTheta >= _inputData.CotThetaMax ? _inputData.CotThetaMax : cotTheta;
                tanTheta = Math.Pow(cotThetaCalcs, -1).Round();
                Vrdmax = (alfaCw * _inputData.Bw * z * v1 * fcd / (tanTheta + cotThetaCalcs)).Round();
                Vrds = ((_inputData.Asw / _inputData.S) * z * fywd * cotThetaCalcs).Round();
            }

            _outputData.V1 = v1;
            _outputData.Z = z;
            _outputData.AlfaCw = alfaCw;
            _outputData.Fywd = fywd;
            _outputData.CotTheta = cotTheta;
            _outputData.CotThetaCalcs = cotThetaCalcs;
            _outputData.TanTheta = tanTheta;
            _outputData.NoSolution = noSolution;
            _outputData.Theta = theta;
            _outputData.Vrdmax = Vrdmax;
            _outputData.Vrds = Vrds;
        }

        

        private static double GetAlfaCw(double fcd, double sigmaCp)
        {
            var result = 0.0;
            if (sigmaCp <= 0.25 * fcd)
                result = (1 + sigmaCp / fcd).Round();
            else if (0.25 * fcd < sigmaCp && sigmaCp <= 0.5 * fcd)
                result = 1.25;
            else if (0.5 * fcd < sigmaCp && sigmaCp <= fcd)
                result = (2.5 * (1 - sigmaCp / fcd)).Round();

            return result;
        }
    }
}