using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace StruCal.AppCore.Automapper
{
    public class NanFormatter : IValueConverter<double, double>
    {
        public double Convert(double source, ResolutionContext context)
            => double.IsNaN(source) ? double.MinValue : source;
    }
}