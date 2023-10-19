using AutoMapper;
using StruCal.AppCore.Automapper;
using StruCal.AppCore.ShearReinforcement.DTO;
using StruCal.Calculators.ShearReinforcement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.ShearReinforcement.App.Mapper
{
    public class ShearReinforcementProfile : Profile
    {
        public static IMapper GetMapper() => MapperFactory.GetMapper<ShearReinforcementProfile>();

        public ShearReinforcementProfile()
        {
            CreateMap<ShearReinforcementInputDTO, ShearReinforcementInput>();
            CreateMap<ShearReinforcementOutput, ShearReinforcementOutputDTO>()
                .ForMember(e => e.Theta, opt => opt.ConvertUsing(new NanFormatter()));
        }
    }
}