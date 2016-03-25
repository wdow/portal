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

@RequestMapping(value="/", method= RequestMethod.POST)
	public String home(){
	
		return "index";
	}


@RequestMapping(value="/tools", method= RequestMethod.POST)
public List<Tool> getTools(){


   List<Tool> all= tools.findAll();

	return all;
}

@RequestMapping(value="/papers2", method= RequestMethod.POST)
public List<Paper> getpapers(){



   List<Paper> all= papers.findAll();
   System.out.println(all.size());
    System.out.println(all);
	return all;
}

@RequestMapping(value="/artifacts", method= RequestMethod.POST)
public List<Artifact> POSTArtifacts(){


   List<Artifact> all= artifacts.findAll();
  
	return all;
}


@RequestMapping(value="/presentations", method= RequestMethod.POST)
public List<Presentation> POSTPresentations(){



   List<Presentation> all= presentations.findAll();

	return all;
}

@RequestMapping(value="/IGs", method= RequestMethod.POST)
public  List<IG_Document> getIGs(){



   List<IG_Document> all= IGs.findAll();

	return all;
}



}
