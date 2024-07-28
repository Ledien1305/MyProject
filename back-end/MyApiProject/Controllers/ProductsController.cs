using Microsoft.AspNetCore.Mvc;

namespace MyApiProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new[]
            {
                new { Id = 1, Name = "Product 1", Price = 100 },
                new { Id = 2, Name = "Product 2", Price = 200 }
            };

            return Ok(products);
        }
    }
}
