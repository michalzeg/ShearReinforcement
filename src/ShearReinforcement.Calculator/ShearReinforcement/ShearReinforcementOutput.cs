namespace StruCal.Calculators.ShearReinforcement
{
    public class ShearReinforcementOutput
    {
        public double Vrdc1 { get; set; }
        public double Vrdc2 { get; set; }
        public double Vrdc { get; set; }
        public double Crdc { get; set; }
        public double Sigmacp { get; set; }
        public double Vmin { get; set; }
        public double Fcd { get; set; }
        public double Ro1 { get; set; }
        public double K { get; set; }

        public double Theta { get; set; }
        public double Fywd { get; set; }
        public double CotTheta { get; set; }
        public double CotThetaCalcs { get; set; }
        public double TanTheta { get; set; }
        public double Z { get; set; }
        public double V1 { get; set; }
        public double AlfaCw { get; set; }
        public double Vrds { get; set; }
        public double Vrdmax { get; set; }
        public bool NoSolution { get; set; }
    }
}