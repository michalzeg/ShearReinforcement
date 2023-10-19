using AutoMapper;
using StruCal.AppCore.Automapper;
using StruCal.AppCore.ShearReinforcement.DTO;
using StruCal.Calculators.ShearReinforcement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.ShearReinforcement
{
    public class ShearReinforcementService
    {
        private readonly ShearReinforcementCalculator _calculator;
        private readonly IMapper _mapper;

        public ShearReinforcementService(IMapper mapper)
        {
            _calculator = new ShearReinforcementCalculator();
            _mapper = mapper;
        }

        public ShearReinforcementOutputDTO GetResult(ShearReinforcementInputDTO inputDTO)
        {
            var input = _mapper.Map<ShearReinforcementInputDTO, ShearReinforcementInput>(inputDTO);
            var result = _calculator.CalculateShearReinforcement(input);
            var output = _mapper.Map<ShearReinforcementOutputDTO>(result);
            return output;
        }
    }
}