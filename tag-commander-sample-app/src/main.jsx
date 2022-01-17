 import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import TagCommander from 'react-tag-commander';
import './index.scss';
import './styles/main.scss';

const tagWrapper = TagCommander.getInstance();
tagWrapper.setDebug(true);

async function InitApp() {

  // to set the TagCommander container provide the id
  await Promise.all([
    tagWrapper.addContainer('container_head', '/tag-commander-head.js', 'head'),
    tagWrapper.addContainer('container_body', '/tag-commander-body.js', 'body'),
    tagWrapper.removeContainer('container_body')
  ])

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

InitApp();