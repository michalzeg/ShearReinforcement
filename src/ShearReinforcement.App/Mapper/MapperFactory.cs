using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace StruCal.AppCore.Automapper
{
    public static class MapperFactory
    {
        public static IMapper GetMapper<T>() where T : Profile, new() => new MapperConfiguration(e => e.AddProfile<T>()).CreateMapper();
    }
}