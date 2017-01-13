package gov.nist.resources.portal;


import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import gov.nist.resources.portal.domain.*;
import gov.nist.resources.portal.repository.ArtifactRepository;
import gov.nist.resources.portal.repository.IG_DocumentRepository;
import gov.nist.resources.portal.repository.LinksRepository;
import gov.nist.resources.portal.repository.PaperRepository;
import gov.nist.resources.portal.repository.PresentationRepository;
import gov.nist.resources.portal.repository.SchemaDomainRepository;
import gov.nist.resources.portal.repository.SchemaRepository;
import gov.nist.resources.portal.repository.ToolRepository;
import gov.nist.resources.portal.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.data.mongodb.core.geo.GeoJson;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
@Autowired
ToolRepository tools;
@Autowired
PaperRepository papers;

@Autowired
ArtifactRepository artifacts;
@Autowired
SchemaRepository schemas;
@Autowired
PresentationRepository presentations; 
@Autowired
IG_DocumentRepository IGs; 
@Autowired
SchemaDomainRepository SchemaDomain;
@Autowired
UserRepository user;

@Autowired
LinksRepository Links;

@RequestMapping(value="/", method= RequestMethod.POST)
	public @ResponseBody String home(){
	
		return "index";
	}

/*@RequestMapping("/user")
public Principal user(Principal user){


   return user;
}*/


@RequestMapping(value="/tools", method= RequestMethod.POST)
public @ResponseBody List<Tool> POSTTools(){


   List<Tool> all= tools.findAll();

	return all;
}

@RequestMapping(value="/toolsBydomain", method= RequestMethod.POST)
public @ResponseBody List<Tool> findToolsByDomain(@RequestBody String domain){

   List<Tool> all= tools.findAll();
   List temp=new ArrayList<Tool>();
   for(Tool t :all){
	   
	   if(!t.getTypes().isEmpty()){
		   for(String s: t.getTypes()){
			   if(s.equals(domain)){
			   temp.add(t);
			   }
			   
		   }
	   }
   }
   

	return temp;
}

@RequestMapping(value="/papersByDomain", method= RequestMethod.POST)
public @ResponseBody List<Paper> findPapersByDomain(@RequestBody String domain){

   List<Paper> all= papers.findAll();
   List temp=new ArrayList<Paper>();
   for(Paper p :all){
	   
	   if(!p.getTypes().isEmpty()){
		   for(String s: p.getTypes()){
			   if(s.equals(domain)){
			   temp.add(p);
			   }
			   
		   }
	   }
   }
   return temp;
}

@RequestMapping(value="/presentationsByDomain", method= RequestMethod.POST)
public @ResponseBody List<Presentation> findPresentationsByDomain(@RequestBody String domain){

   List<Presentation> all= presentations.findAll();
   List temp=new ArrayList<Presentation>();
   for(Presentation p :all){
	   
	   if(!p.getTypes().isEmpty()){
		   for(String s: p.getTypes()){
			   if(s.equals(domain)){
			   temp.add(p);
			   }
			   
		   }
	   }
   }
   return temp;
}

@RequestMapping(value="/IGsByDomain", method= RequestMethod.POST)
public @ResponseBody List<Paper> findIGsByDomain(@RequestBody String domain){

   List<IG_Document> all= IGs.findAll();
   List temp=new ArrayList<IG_Document>();
   for(IG_Document p :all){
	   
	   if(!p.getTypes().isEmpty()){
		   for(String s: p.getTypes()){
			   if(s.equals(domain)){
			   temp.add(p);
			   }
			   
		   }
	   }
   }
   return temp;
}

@RequestMapping(value="/schemasByDomain", method= RequestMethod.POST)
public @ResponseBody List<SchemaDomain> findSchemasByDomain(@RequestBody String domain){

   List<SchemaDomain> all= SchemaDomain.findAll();
   List temp=new ArrayList<SchemaDomain>();
   for(SchemaDomain p :all){
	   
	   if(!p.getTypes().isEmpty()){
		   for(String s: p.getTypes()){
			   if(s.equals(domain)){
			   temp.add(p);
			   }
			   
		   }
	   }
   }
   return temp;
}
@RequestMapping(value="/linksByDomain", method= RequestMethod.POST)
public @ResponseBody List<Links> findLinksByDomain(@RequestBody String domain){

	   List<Links> all= Links.findAll();
	   List temp=new ArrayList<Links>();
	   for(Links p :all){
		   
		   if(!p.getTypes().isEmpty()){
			   for(String s: p.getTypes()){
				   if(s.equals(domain)){
				   temp.add(p);
				   }
				   
			   }
		   }
	   }
	   return temp;
	}

@RequestMapping(value="/papers2", method= RequestMethod.POST)
public @ResponseBody List<Paper> POSTpapers(){



   List<Paper> all= papers.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}

@RequestMapping(value="/artifacts", method= RequestMethod.POST)
public @ResponseBody List<Artifact> POSTArtifacts(){


   List<Artifact> all= artifacts.findAll();
  
	return all;
}


@RequestMapping(value="/schemas", method= RequestMethod.POST)
public @ResponseBody List<Schema> POSTSchemas(){


   List<Schema> all=  schemas.findAll();
  
	return all;
}
@RequestMapping(value="/schemaDomain", method= RequestMethod.POST)
public @ResponseBody List<gov.nist.resources.portal.domain.SchemaDomain> POSTSchemaDomain(){


   List<SchemaDomain> all= SchemaDomain.findAll();
  
	return all;
}
@RequestMapping(value="/presentations", method= RequestMethod.POST)
public @ResponseBody List<Presentation> POSTPresentations(){



   List<Presentation> all= presentations.findAll();

	return all;
}

@RequestMapping(value="/IGs", method= RequestMethod.POST)
public  @ResponseBody List<IG_Document> POSTIGs(){



   List<IG_Document> all= IGs.findAll();

	return all;
}

@RequestMapping(value="/links", method= RequestMethod.POST)
public  @ResponseBody List<Links> links(){



   List<Links> all= Links.findAll();

	return all;
}

@RequestMapping("/user")
public Principal user(Principal user) {
  return user;
}

/*@Configuration
//@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .httpBasic()
    .and()
      .authorizeRequests()
        .anyRequest().authenticated();
  }
}
*/

@RequestMapping("/admin")
public String admin() {
  return "admin";
}


//@RequestMapping(value="/admin", method= RequestMethod.POST)
//public String user(ModelMap model) {
//	model.addAttribute("message", "Spring Security - ROLE_ADMIN");
//	return "hello";
//}

}