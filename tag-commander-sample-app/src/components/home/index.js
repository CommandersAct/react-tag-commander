import React from "react";
import { useTracker } from "react-tag-commander";

const Home = () => {
  useTracker({tcReloadOnly: [
      {ids :'4056', idc: '12'}
    ]});

  return (
   <div>
      <h1>react-tag-commander Sample application</h1>
      <h2>The loading and configuration</h2>
      <h3>The main application configuration</h3>
      <pre>
        <code className="keyword">import</code> <code className="varible">TC_Wrapper</code> <code className="keyword">from</code> <code className="string">'react-tag-commander'</code>;<br />
        <code className="keyword">const</code> <code className="varible">wrapper</code> = <code className="varible">TC_Wrapper</code>.<code className="method">getInstance</code>();<br />
        <br />
        <code className="comment">{'// you need to provide URIS to load containers script. You can add as many container as you like'}</code><br />
        <code className="comment">{'// addContainer (id, uri, node)'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">addContainer</code>(<code className="string">'a_name_for_the_container_id'</code>, <code className="string">'/the/path/to/tag-commander-container.js'</code>, <code className="string" >'head'</code>);<br />
        <br />
        <code className="comment">{'// but you can also remove them'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">removeContainer</code>(<code className="string">'my_tag_container_id'</code>);<br />
        <br />
        <code className="comment">{'// you can set debug by setting this to true'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">setDebug</code>(<code className="keyword">true</code>);<br />
        <br />
        <code className="comment">{'// you can track the url of your app by setting this, it will reload the containers on each page change'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">trackRoutes</code>(<code className="keyword">true</code>);<br />
      </pre>

      <p>
          In the provider's method 'addContainer', The "node" parameter can either be set to 'body' or 'head', by default the container will be placed in the head.
      </p>

      <h3>The routes configuration</h3>
      <p>
        If you have set wrapper.trackRoutes(true); in your application configuration,
        you can configure witch container will be reloaded on witch route, else what you need to do it in your controller.
        the containers will be reloaded after the controller has been executed,
        but if you change or set a varible in your controller methode you will need to call wrapper.reloadAllContainers(options)
        to propagate the changes to your containers.
      </p>

      <p>
        If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually
      </p>
      <pre>
        <code className="comment">{'// reload a specifique container'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">reloadContainer</code>(<code className="varible">ids</code>, <code className="varible">idc</code>, <code className="varible">options</code>);<br />
        <br />
        <code className="comment">{'// or you can reload all the containers'}</code><br />
        <code className="varible">wrapper</code>.<code className="method">reloadAllContainers</code>(<code className="varible">options</code>);<br />
      </pre>

      <h2>How to set your Vars</h2>
      <h3>In a component</h3>
      <p>
          The setVar call allows to set your tc_vars.
      </p>
      <pre>
      <code className="varible">wrapper</code>.<code className="method">setTcVars</code>({'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_template</code> : <code className="string">"shop"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_work</code> : <code className="string">"dev"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">env_language</code> : <code className="string">"en"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_id</code> : <code className="string">"124"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_logged</code> : <code className="string">"true"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_age</code>: <code className="string">"32"</code>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_newcustomer</code> : <code className="string">"false"</code><br />
      <code>{'}'});</code><br />
      <br />
      <code className="comment">{'// you can also override some varible'}</code><br />
      <code className="keyword">if</code> (<code className="varible">isNewUser</code>) {'{'}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">wrapper</code>.<code className="method">setTcVars</code>({'{'}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="varible">user_newcustomer</code> : <code className="string">"true"</code><br />
      <code>{'}'});</code><br />
      <br />
      <code className="comment">{'// or set/update them individualy'}</code><br />
      <code className="varible">wrapper</code>.<code className="method">setTcVar</code>(<code className="string">'env_template'</code>, <code className="string">'super_shop'</code>);<br />
      <br />
      <code className="comment">{'// you can also remove a var'}</code><br />
      <code className="varible">wrapper</code>.<code className="method">removeTcVars</code>(<code className="string">'env_template'</code>);<br />
      </pre>

      <h3>In render function(JSX)</h3>
      <p>
        You can set your tc_vars with the TcVars Component
      </p>
      <pre>
        &lt;<code className="keyword">TcVars</code> <code className="method">env_language</code>=<code className="string">"fr"</code> <code className="method">env_template</code>=<code className="string">"super_shop"</code> /&gt;
      </pre>
      </div>
        );
  }


export default Home;
