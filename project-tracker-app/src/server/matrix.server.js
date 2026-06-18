(function() {
    data.matrix = {};
    
    // Fetch choices for Priority
    data.priorities = [];
    var choiceGR = new GlideRecord('sys_choice');
    choiceGR.addQuery('name', 'incident');
    choiceGR.addQuery('element', 'priority');
    choiceGR.addQuery('inactive', false);
    choiceGR.orderBy('sequence');
    choiceGR.query();
    while (choiceGR.next()) {
        data.priorities.push({
            value: choiceGR.getValue('value'),
            label: choiceGR.getValue('label')
        });
    }

    // Fetch choices for Impact
    data.impacts = [];
    var impactGR = new GlideRecord('sys_choice');
    impactGR.addQuery('name', 'incident');
    impactGR.addQuery('element', 'impact');
    impactGR.addQuery('inactive', false);
    impactGR.orderBy('sequence');
    impactGR.query();
    while (impactGR.next()) {
        data.impacts.push({
            value: impactGR.getValue('value'),
            label: impactGR.getValue('label')
        });
    }

    var ga = new GlideAggregate('incident');
    ga.addActiveQuery();
    ga.addAggregate('COUNT');
    ga.groupBy('priority');
    ga.groupBy('impact');
    ga.query();

    while (ga.next()) {
        var p = ga.getValue('priority');
        var i = ga.getValue('impact');
        var count = ga.getAggregate('COUNT');
        
        if (!data.matrix[p]) data.matrix[p] = {};
        data.matrix[p][i] = count;
    }
})();
