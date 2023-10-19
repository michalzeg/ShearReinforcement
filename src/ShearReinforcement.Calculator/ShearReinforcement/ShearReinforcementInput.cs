namespace StruCal.Calculators.ShearReinforcement
{
    public class ShearReinforcementInput
    {
        //all values accordintg to EN-1992-2
        //Naming according to EN-1992-2
        //all units in [mm] and [N]
        public double Ved { get; set; }

        public double Fck { get; set; }
        public double Ned { get; set; }
        public double GammaC { get; set; }
        public double Bw { get; set; }
        public double D { get; set; }
        public double Asl { get; set; }
        public double H { get; set; }
        public double K1 { get; set; }

        public double CotThetaMax { get; set; }
        public double CotThetaMin { get; set; }
        public double Fywk { get; set; }
        public double GammaS { get; set; }
        public double Asw { get; set; }
        public double S { get; set; }
    }
}