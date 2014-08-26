exports.substitute = function(string, object, regexp) {
    return String(string).replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name) {
        if (match.charAt(0) == '\\') return match.slice(1);
        if (object[name] != null) return object[name];

        var path = name.split('.'),
            length = path.length,
            sub = object,
            i;

        if (length <= 1)
            return match;

        for (i = 0; i < length; i++) {
            if ((sub = sub[path[i]]) == null) return match;
        }
        return sub;
    });
};

// replace breakline to <br/>

exports.addBreakline = function(txt){
    return txt.replace(/\r?\n|\r/g, "<br>");
};


