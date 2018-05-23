'use strict';

import React from 'react';
import { render as reactDomRender } from 'react-dom';// destructuring importing just this one property and assigning it to reactDom...
import App from '../src/component/app';

const container = document.createElement('div');
document.body.appendChild(container);

reactDomRender(<App />, container);