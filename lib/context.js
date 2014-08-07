module.exports = function(name, version){

  var pin = [name, version].filter(function(x){return x;}).join('/');
  if (pin) {
    pin += '/';
  }

  return  {
    "@context": [
      "http://schema.org",
      {
        //base
        "@base": 'https://registry.standardanalytics.io/' + pin,

        //prefix
        "sa": 'https://registry.standardanalytics.io/',
        "saterms": 'https://standardanalytics.io/ns/',
        "schema": "http://schema.org/",
        "nfo":  "http://www.semanticdesktop.org/ontologies/nfo/#",
        "dc":   "http://purl.org/dc/terms/",
        "dctypes": "http://purl.org/dc/dcmitype/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "bibo": "http://purl.org/ontology/bibo/",
        "cnt": "http://www.w3.org/2011/content#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "oa": "http://www.w3.org/ns/oa#",

        //additional terms
        "valueType":  { "@id": "saterms:valueType", "@type": "@id" },
        "contentPath": "saterms:contentPath",
        "contentData": "saterms:contentData",
        "filePath":    "saterms:filePath",

        //Cf http://www.w3.org/wiki/WebSchemas/Periodicals,_Articles_and_Multi-volume_Works
        "volumeNumber": "bibo:volume",
        "issueNumber": "bibo:issue",
        "pagination": "bibo:pages",
        "pageStart": "bibo:pageStart",
        "pageEnd": "bibo:pageEnd",
        "issn": "bibo:issn",
        "Periodical": { "@id": "bibo:Periodical", "@type": "@id" },
        "PublicationIssue": { "@id": " bibo:Issue", "@type": "@id" },
        "PublicationVolume": { "@id": "saterms:PublicationVolume", "@type": "@id" },

        "doi": "bibo:doi",
        "pmid": "bibo:pmid",

        "Abstract": { "@id": "saterms:Abstract", "@type": "@id" },
        "abstract": "saterms:abstract",
        "abstractBody": "saterms:abstractBody",

        "hashAlgorithm": "nfo:hashAlgorithm",
        "hashValue": "nfo:hashValue",

        "Readme":   { "@id": "saterms:Readme", "@type": "@id" },

        //convenience
        "sourceCode": { "@reverse": "schema:targetProduct", "@type": "@id" },

        //force list or set
        "hasPart": { "@reverse": "schema:isPartOf", "@container": "@set", "@type": "@id" }, //Also, cf http://www.w3.org/wiki/WebSchemas/Collection
        "input":  { "@id": "saterms:input", "@type": "@id", "@container": "@set" },

        "encoding":           { "@id": "schema:encoding",           "@container": "@list", "@type": "@id" },
        "distribution":       { "@id": "schema:distribution",       "@container": "@list", "@type": "@id" },
        "targetProduct":      { "@id": "schema:targetProduct",      "@container": "@list", "@type": "@id" },

        "thumbnail":          { "@id": "schema:thumbnail",          "@container": "@list", "@type": "@id" },
        "dataset":            { "@id": "schema:dataset",            "@container": "@list", "@type": "@id" },
        "image":              { "@id": "schema:image",              "@container": "@list", "@type": "@id" },
        "audio":              { "@id": "schema:audio",              "@container": "@list", "@type": "@id" },
        "video":              { "@id": "schema:video",              "@container": "@list", "@type": "@id" },
        "keywords":           { "@id": "schema:keywords",           "@container": "@list" },
        "about":              { "@id": "schema:about",              "@container": "@list", "@type": "@id" },
        "requirements":       { "@id": "schema:requirements",       "@container": "@list", "@type": "@id" },
        "isBasedOnUrl":       { "@id": "schema:isBasedOnUrl",       "@container": "@list", "@type": "@id" },
        "citation":           { "@id": "schema:citation",           "@container": "@list", "@type": "@id" },

        "contributor":        { "@id": "schema:contributor",        "@container": "@list", "@type": "@id" },
        "editor":             { "@id": "schema:editor",             "@container": "@list", "@type": "@id" },
        "accountablePerson":  { "@id": "schema:accountablePerson",  "@container": "@list", "@type": "@id" },
        "sourceOrganization": { "@id": "schema:sourceOrganization", "@container": "@list", "@type": "@id" }
      }
    ]
  };
};