'use strict';<% if (superClass === 'Component') { %>

import Soy from 'metal-soy';
import templates from './<%= capitalizeName %>.soy';<% } else if (superClass === 'Attribute') { %>

import Attribute from 'metal-attribute';<% } %>

class <%= capitalizeName %><% if (superClass !== 'none') { %> extends <%= capitalizeName %> <% } %> {
}<% if (superClass === 'Component') { %>
Soy.register(<%= capitalizeName %>, templates)<% } %>

export default <%= capitalizeName %>;
