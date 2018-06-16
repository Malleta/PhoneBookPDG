using Microsoft.EntityFrameworkCore;
using PhoneBookPDG.Models;

namespace PhoneBookPDG.Data
{
    public class PhoneBookContext : DbContext
    {
        public PhoneBookContext(DbContextOptions<PhoneBookContext> options)
            :base(options){}

        public DbSet<Person> Persons { get; set; }

        protected override void OnModelCreating(ModelBuilder ModelBuilder)
        {
            // ModelBuilder.Entity<Person>().Property(p=>p.Id)
            //     .HasColumnType("smallint");
            ModelBuilder.Entity<Person>().Property(p=>p.FirstName)
                .HasColumnType("nvarchar(60)")
                .IsRequired();
            ModelBuilder.Entity<Person>().Property(p=>p.LastName)
                .HasColumnType("nvarchar(60)")
                .IsRequired();
            ModelBuilder.Entity<Person>().Property(p=>p.TelephoneNumber)
                .HasColumnType("varchar(15)")
                .IsRequired();
        }
    }
}