import React from "react";

const Home = () => {
  return (
   <div>
     <h1>react-tag-commander</h1>
       This service lets you integrate Tag Commander in your React applications easily.
        <a href="https://www.commandersact.com/fr/produits/tagcommander/">Official website</a>
      <h2>Features</h2>
        <ul>
         <li>automatic page tracking</li>
         <li>event catching</li>
         <li>multiple containers</li>
        </ul>
      
      <h2>Installation and Quick Start</h2>
        <p>The quick start is designed to give you a simple, working example for the most common usage scenario. There are numerous other ways to configure and use this library as explained in the documentation.</p>
      
      <h3>1- Installation:</h3>
        <p>You can install the module from a package manager of your choice directly from the command line</p>
      <h4># Bower</h4>
        <pre>bower install react-tag-commander</pre>
      <h4># NPM</h4>
        <pre>npm i react-tag-commander</pre>
          <p>Or alternatively, grab the dist/index.js and include it in your project</p>
          <p>In your application, declare the ngx-tag-commander module dependency.</p>
      
      {/* <h3>2- In your application, get an TC_Wrapper instance:</h3> */}
        <pre>&lt;script src="nodes_components/react-tag-commander/dist/index.es5.min.js"&gt;&lt;/script&gt;</pre>
          or if you are using es6, import it like so
        <pre>{`import TC_Wrapper, { withTracker } from 'react-tag-commander';`}</pre>

      <h3>2- In your application, get an TC_Wrapper instance:
          {/* Add your Tag commander containers and start tracking: */}
          </h3>
            <pre>{`const wrapper = TC_Wrapper.getInstance();`}</pre>
      
      <h3>3- In your application, get an TC_Wrapper instance: Add your Tag commander containers and start tracking:</h3>
        <pre>
          <code className="method">import TC_Wrapper,</code><code></code>/n{ withTracker }/n</pre> from 'react-tag-commander';</code>
          
          const wrapper = TC_Wrapper.getInstance();
          
          <code className="comment">//you need to provide URIS to load containers script.</code>
          <code className="comment">// function addContainer (id, uri, node)</code>
          <code className="method">wrapper.addContainer('a_name_for_the_container_id', '/the/path/to/tag-commander-container.js', 'head');</code>

          // you can add as many container as you like
          // but you can also remove them
          wrapper.removeContainer('my_tag_container_id');
          
          // you can set debug by setting this to true
          wrapper.setDebug(true);

          // you can track the url of your app by setting this
          wrapper.trackRoutes(true);
        </pre>
          <p>
              Congratulations! react-tag-commander is ready
          </p>

          <h2>Set Vars</h2>

          <h3>In a controller</h3>
          <p>
              The setVar call allows to set your tc_vars.
          </p>
          <pre>
          <code className="class">TagCommanderService</code>.<code className="method">setTcVars</code>{'{'}
              <code className="varible">env_template</code> : <code className="string">"shop"</code>,
              <code className="varible">env_work</code> : <code className="string">"dev"</code>,
              <code className="varible">env_language</code> : <code className="string">"en"</code>,
              <code className="varible">user_id</code> : <code className="string">"124"</code>,
              <code className="varible">user_logged</code> : <code className="string">"true"</code>,
              <code className="varible">user_age</code>: <code className="string">"32"</code>,
              <code className="varible">user_newcustomer</code> : <code className="string">"false"</code>,
          
          <code className="comment">{'// you can also override some varible'}</code>
          <code className="keyword">if</code> (<code className="varible">isNewUser</code>) {'{'}
              <code className="class">TagCommanderService</code>.<code className="method">setTcVars</code>({'{'}
                  <code className="varible">user_newcustomer</code> : <code className="string">"true"</code>,
           
          <code className="comment">{'// or set/update them individualy'}</code>
          <code className="class">TagCommanderService</code>.<code className="method">setTcVar</code>(<code className="string">'env_template'</code>, <code className="string">'super_shop'</code>);

          <code className="comment">{'// you can also remove a var'}</code>
          <code className="class">TagCommanderService</code>.<code className="method">removeTcVars</code>(<code className="string">'env_template'</code>);
          </pre>

          <h3>As a directive</h3>

          <p>You can use the directive tcSetVars direcly on any html node</p>

          <pre>
          &lt;<code className="keyword">html-element</code> <code className="method">tcSetVars</code>=<code className="string">"'&#123;env_language': 'fr'&#125;"</code>&gt;&lt;/<code className="keyword">html-element</code>&gt;
          <code className="comment">&lt;!-- other exemples --&gt;</code>
          <code className="comment">&lt;!-- defaultLanguage being an attribut of your component --&gt;</code>
          &lt;<code className="keyword">template</code> <code className="method">tcSetVars</code>=<code className="string">"&#123;'env_language': defaultLanguage'&#125;"</code>&gt;&lt;/<code className="keyword">template</code>&gt;
          &lt;<code className="keyword">div</code> <code className="method">tcSetVars</code>=<code className="string">"&#123;'env_language': default_language&#125;"</code>&gt;&lt;/<code className="keyword">div</code>&gt;
          </pre>

          <h2>Get Var</h2>
          <h3>In your controller</h3>

          <pre>
          <code className="keyword">let</code> <code className="varible">myVar</code> = <code className="class">TagCommanderService</code>.<code className="method">getTcVar</code>(<code className="string">'VarKey'</code>);
          </pre>
          <h2>Capture Events</h2>

          <h3>In a controller</h3>

          <pre>
          <code className="keyword">let</code> <code className="varible">eventId</code> = <code className="string">'1234'</code>;
          <code className="keyword">let</code> <code className="varible">data</code> = {'{'}<code className="string">"env_language"</code>: <code className="varible">theEventVar</code>{'{'};

          <code className="class">TagCommanderService</code>.<code className="method">captureEvent</code>(<code className="varible">eventId</code>, <code className="varible">data</code>);
          </pre>
          <h3>As a directive</h3>
          <pre>
          &lt;<code className="keyword">button</code> <code className="method">tcEvent</code>=<code className="string">"{'{'} 'eventId': myEventId, 'data':{'{'}'env_language\': envLanguage{'{'}{'{'}"</code>&gt; change to default language &lt;/<code className="keyword">button</code>&gt;
          </pre>
          <h2>How to reload your container</h2>
          <p>
              When you update your varible you also need to update your container to propagate the changes
          </p>
          <pre>
          <code className="keyword">let</code> <code className="varible">idc</code> = <code className="string">'1234'</code>;
          <code className="keyword">let</code> <code className="varible">ids</code> = <code className="string">'1234'</code>;
          <code className="keyword">let</code> <code className="varible">options</code> ={'{'}
              <code className="varible">exclusions</code>: [
                  <code className="string">"datastorage"</code>,
                  <code className="string">"deduplication"</code>,
                  <code className="string">"internalvars"</code>,
                  <code className="string">"privacy"</code>
              ]
            {'{'};
          <code className="class">TagCommanderService</code>.<code className="method">reloadContainer</code>(<code className="varible">ids</code>, <code className="varible">idc</code>, <code className="varible">options</code>);
          <code className="comment">{'// or you can reload all the containers'}</code>
          <code className="class">TagCommanderService</code>.<code className="method">reloadAllContainers</code>(<code className="varible">options</code>);
          </pre>
          <h3>Automatic reload of your containers by tracking Routes</h3>
          <p>
              you need to set TagCommanderProvider.trackRoutes(true); to true in your app configuration
          </p>
          <p>to be updated</p>
          <pre>
          <code className="class">TagCommanderService</code>.<code className="method">trackRoutes</code>(<code className="keyword">true</code>);
          </pre>
          <p>
              then you can configure the your route by using the tcRealoadOnly option in your route configuration
          </p>
          <p>
              If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually
          </p>

          <pre>
          <code className="comment">{'// somewhere in your controller'}</code>
          <code className="comment">{'// reload a specifique container'}</code>
          <code className="class">TagCommanderService</code>.<code className="method">reloadContainer</code>(<code className="varible">ids</code>, <code className="varible">idc</code>, <code className="varible">options</code>);
          <code className="comment">{'// or you can reload all the containers'}</code>
          <code className="class">TagCommanderService</code>.<code className="method">reloadAllContainer</code>(<code className="varible">options</code>);
          </pre>

          <h2>Sample app</h2>
          <p>
              To help you with your implementaiton we provided a sample application. to run it
          </p>
          <pre>
          cd tag-commander-sample-app
          yarn start
          </pre>
          <p>
          then go to http://localhost:8080
          </p>

          <h2>Development</h2>
          <p>
              After forking you will need to run the following from a command line to get your environment setup:
          </p>
          <pre>
          yarn install
          </pre>
          <p>
              After install you have the following commands available to you from a command line:
          </p>
      </div>
        );
  }


export default Home;