using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StruCal.AppCore.ShearReinforcement;
using StruCal.AppCore.ShearReinforcement.DTO;

namespace StruCal.ShearReinforcement.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ShearReinforcementApiController : Controller
    {
        private readonly ShearReinforcementService _shearReinforcementService;

        public ShearReinforcementApiController(ShearReinforcementService shearReinforcementService)
        {
            _shearReinforcementService = shearReinforcementService;
        }

        [HttpPost]
        public ShearReinforcementOutputDTO GetResults(ShearReinforcementInputDTO input)
        {
            var result = _shearReinforcementService.GetResult(input);

            return result;
        }
    }
}