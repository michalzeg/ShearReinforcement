using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StruCal.AppCore.ShearReinforcement;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace StruCal.ShearReinforcement
{
    public static class StartupExtensions
    {
        public static IApplicationBuilder AddShearReinforcementStaticFiles(this IApplicationBuilder builder, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) return builder;

            builder.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                Path.Combine(env.ContentRootPath, Startup.ClientName)),
                RequestPath = $"/{Startup.ClientName}"
            });
            return builder;
        }

        public static IServiceCollection AddShearReinforcement(this IServiceCollection services)
        {
            services.AddScoped<ShearReinforcementService>();
            return services;
        }
    }
}