package gov.nist.resources.portal;


import java.util.ArrayList;
import java.util.List;

import gov.nist.resources.portal.domain.Artifact;
import gov.nist.resources.portal.domain.IG_Document;
import gov.nist.resources.portal.domain.Paper;
import gov.nist.resources.portal.domain.Presentation;
import gov.nist.resources.portal.domain.Tool;
import gov.nist.resources.portal.repository.ArtifactRepository;
import gov.nist.resources.portal.repository.IG_DocumentRepository;
import gov.nist.resources.portal.repository.PaperRepository;
import gov.nist.resources.portal.repository.PresentationRepository;
import gov.nist.resources.portal.repository.ToolRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.geo.GeoJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
@Autowired
ToolRepository tools;
@Autowired
PaperRepository papers;

@Autowired
ArtifactRepository artifacts;
@Autowired
PresentationRepository presentations; 
@Autowired
IG_DocumentRepository IGs; 

@RequestMapping(value="/", method= RequestMethod.GET)
	public String home(){
	System.out.println("adaaaaaaaaaaa");
		return "index";
	}


@RequestMapping(value="/tools", method= RequestMethod.GET)
public List<Tool> gettools(){
System.out.println("adaaaaaaaaaaa");


   List<Tool> all= tools.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}

@RequestMapping(value="/papers", method= RequestMethod.GET)
public List<Paper> getpapers(){
System.out.println("adaaaaaaaaaaa");


   List<Paper> all= papers.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}

@RequestMapping(value="/artifacts", method= RequestMethod.GET)
public List<Artifact> getArtifacts(){
System.out.println("adaaaaaaaaaaa");


   List<Artifact> all= artifacts.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}


@RequestMapping(value="/presentations", method= RequestMethod.GET)
public List<Presentation> getPresentations(){



   List<Presentation> all= presentations.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}

@RequestMapping(value="/IGs", method= RequestMethod.GET)
public  List<IG_Document> getIGs(){



   List<IG_Document> all= IGs.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}



}
