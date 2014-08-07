/**
 * convert schema.org raw RDFa data into compacted JSON-LD
 */

var fs = require('fs')
  , pjsonld = require('..')
  , jsonld = require('jsonld')();

jsonld.use('request'); //needed to parse RDFa

//get context from SA ontologie
var ctx = pjsonld.terms()['@context'];

//patch for schema.org specific convention
ctx["domainIncludes"] = {
  "@id": "schema:domainIncludes",
  "@type": "@id"
};

ctx["rangeIncludes"] = {
  "@id": "schema:rangeIncludes",
  "@type": "@id"
};

//jsonld.request will convert RDFa into a graph
jsonld.request("http://schema.org/docs/schema_org_rdfa.html", function(err, res, dataRdfa) {
  jsonld.compact(dataRdfa, ctx, function(err, dataJsonld) {
    fs.writeFileSync('schema_org.jsonld', JSON.stringify(dataJsonld, null, 2));
  });
});