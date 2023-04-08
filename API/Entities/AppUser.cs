namespace API.Entities
{
    public class AppUser
    {//shortcut: prop, for properties
        public int Id { get; set; }
        //Strings are often optional, but integers must be assigned a vlue, else get assigned balue of 0. "?" to declare variable optional
        public string UserName { get; set; }
    }
}