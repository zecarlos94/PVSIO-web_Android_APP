(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['caracter-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"character\">\n  <img src=\"images/"
    + alias4(((helper = (helper = helpers.shortCode || (depth0 != null ? depth0.shortCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortCode","hash":{},"data":data}) : helper)))
    + ".jpeg\">\n  <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  <p>Actor: "
    + alias4(((helper = (helper = helpers.actor || (depth0 != null ? depth0.actor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actor","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>Location:"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</p>\n  "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.location : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"location","hash":{},"data":data}) : helper)))
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    return " unknown ";
},"6":function(container,depth0,helpers,partials,data) {
    return "<p>Whereabouts are unknown....</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.characters : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();