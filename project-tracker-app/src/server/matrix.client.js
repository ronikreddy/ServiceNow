api.controller = function() {
    var c = this;
    
    c.getCount = function(p, i) {
        return (c.data.matrix[p] && c.data.matrix[p][i]) ? c.data.matrix[p][i] : 0;
    };
    
    c.getColor = function(count) {
        if (count == 0) return '#f9f9f9';
        if (count < 5) return '#d4edda'; // Light Green
        if (count < 20) return '#fff3cd'; // Yellow
        if (count < 50) return '#ffeeba'; // Orange-ish
        return '#f8d7da'; // Red
    };
};
