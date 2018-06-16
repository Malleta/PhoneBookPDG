using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PhoneBookPDG.Data;
using PhoneBookPDG.Models;

namespace PhoneBookPDG.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class DataController : Controller
    {
        private readonly PhoneBookContext _PhoneBookContext;

        public DataController(PhoneBookContext PhoneBookContext)
        {
            _PhoneBookContext = PhoneBookContext;
        }

        [HttpGet]
        public ActionResult<List<Person>> GetAll()
        {
            return _PhoneBookContext.Persons.ToList();
        }
        
        [HttpDelete("{id}")]
        public ActionResult<Person> Delete(int Id)
        {
            var person = _PhoneBookContext.Persons.SingleOrDefault(p=>p.Id == Id);

            if(person == null)
            {
                return NotFound();
            }

            _PhoneBookContext.Persons.Remove(person);
            _PhoneBookContext.SaveChanges();
            return Ok();
        }
        [HttpPost]
        public ActionResult<Person> NewPerson(Person person)
        {
            if(person == null)
            {
                return StatusCode(404);
            }
            
            _PhoneBookContext.Add(person);
            _PhoneBookContext.SaveChanges();

            return StatusCode(200);
        }
    }
}