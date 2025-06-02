(function () {
  const svgGroupContent = `<g>
	<path d="M403.585,6.093c-7.904,0-14.067,5.416-16.735,12.442c-1.052,2.771-5.05,2.927-7.8,2.376
		c-10.746-2.149-27.716-3.958-54.404-3.958c-6.837,0-16.16,0.747-23.753,1.902c-11.246,1.712-17.757,3.815-17.757,9.497
		c0,6.549,7.352,7.318,13.837,7.998c2.617,0.274,9.728-0.521,9.77,1.759c0.04,2.24-7.294,1.47-9.999,1.705
		c-2.604,0.227-5.062,0.44-7.073,0.92c-5.897,1.406-6.534,5.258-6.534,6.849c0,6.528,7.434,7.386,13.992,8.144
		c2.598,0.3,9.583-0.428,9.706,1.826c0.117,2.156-7.668,1.515-10.284,1.696c-5.977,0.416-13.414,0.934-13.414,7.561
		c0,6.594,7.521,7.219,13.564,7.722c2.729,0.227,10.398,0.045,10.479,1.971c0.078,1.861-7.812,1.758-10.613,1.957
		c-5.983,0.425-13.43,0.953-13.43,7.576c0,6.697,7.611,7.028,13.168,7.269c3.264,0.142,10.906,0.474,10.906,2.343
		c0,0.105-0.01,0.166-0.005,0.173c-1.084,1.4-7.851,1.81-10.746,1.984c-2.51,0.151-4.88,0.295-6.821,0.713
		c-5.868,1.263-6.502,5.137-6.502,6.743c0,6.548,7.349,7.315,13.832,7.992c2.738,0.286,9.895-0.237,10.04,1.891
		c0.137,2.008-7.764,1.623-10.48,1.807c-5.966,0.402-13.392,0.902-13.392,7.534c0,6.561,7.301,7.274,13.741,7.903
		c2.511,0.245,9.529-0.817,9.511,1.585c-0.019,2.413-6.865,1.36-9.307,1.635c-6.537,0.734-13.945,1.565-13.945,8.1
		c0,6.577,7.25,7.231,13.647,7.808c2.595,0.234,9.771-0.738,9.734,1.61c-0.037,2.377-6.935,1.406-9.416,1.688
		c-6.546,0.744-13.965,1.587-13.965,8.118c0,6.567,7.282,7.26,13.708,7.87c2.255,0.214,8.769-1.224,8.754,1.31
		c-0.015,2.4-5.794,1.147-7.962,1.461c-7.129,1.029-14.5,2.095-14.5,8.584c0,12.487,29.629,13.048,29.928,13.048
		c29.297,0,52.074-1.164,66.544-3.308c2.389-0.353,6.478-1.548,6.478,5.452v212.455c0,9.665,7.835,17.5,17.5,17.5
		c9.665,0,17.5-7.835,17.5-17.5V23.593C421.085,13.928,413.25,6.093,403.585,6.093z"/>
	<path d="M316.601,414.805c-3.697-11.094-36.275-109.434-41.4-145.922c-4.27-30.414-16.911-58.07-35.595-77.873
		c-12.627-13.386-27.52-22.852-44-28.116c-1.984-0.634-5.559-2.338-5.811-4.759l9.963-131.808l0.015-0.377
		c0-1.124,0.051-2.279,0.1-3.397c0.218-4.984,0.465-10.635-3.906-15.201C191.035,2.198,181.429,0,163.846,0
		c-17.016,0-26.449,2.218-31.544,7.415c-4.643,4.737-4.522,10.734-4.416,16.025c0.017,0.822,0.033,1.66,0.033,2.51v0.189
		l9.977,131.996c0,2.546-6.148,4.714-9.235,5.814c-15.237,5.43-29.046,14.529-40.867,27.066
		c-18.658,19.789-31.31,47.44-35.622,77.861c-3.484,24.573-20.841,79.416-32.327,115.708c-3.534,11.168-6.587,20.814-8.733,27.951
		c-1.707,5.675-1.262,10.314,1.323,13.79c3.509,4.719,9.32,4.855,9.972,4.855h285.701c2.255,0,5.634-1.034,7.734-3.949
		C318.066,424.146,318.322,419.965,316.601,414.805z M163.913,60.621c-12.519,0-22.667-10.147-22.667-22.667
		c0-12.518,10.148-22.666,22.667-22.666c12.519,0,22.667,10.148,22.667,22.666C186.58,50.474,176.431,60.621,163.913,60.621z"/>
</g>`;

  function injectUserMenuButton() {
    const menu = document.querySelector('.second-level-dropdown');
    if (!menu || document.getElementById('clear-cache-btn')) return;

    const li = document.createElement('li');
    li.className = 'ng-tns-c3661552573-0';
    li.innerHTML = `
      <a href="javascript:void(0);" id="clear-cache-btn" class="ng-tns-c3661552573-0">
        <svg class="icon lg fill-current mr-3 ng-tns-c3661552573-0" viewBox="0 0 431.181 431.181" width="20" height="20">
          ${svgGroupContent}
        </svg>
        <span class="ng-tns-c3661552573-0">Clear your Cache and Cookies</span>
      </a>`;
    
    const anchor = li.querySelector('a');
    if (anchor) {
      anchor.onclick = function(event) {
        event.preventDefault();
        clearAriveCacheAndCookies();
      };
      // Adjust left padding to 1.4rem
      anchor.style.paddingLeft = '1.4rem'; 
    }
    menu.appendChild(li);
    console.log('Arive Cleaner: User menu button injected with updated styles.');
  }

  function injectLoginLink() {
    const container = document.querySelector('.auth-form-group.mt-24px.text-center');
    if (!container || document.getElementById('clear-cache-login')) return;

    const link = document.createElement('a');
    link.href = 'javascript:void(0);';
    link.className = 'weight-400';
    link.tabIndex = -1;
    link.id = 'clear-cache-login';
    link.textContent = 'Clear your Cache and Cookies | ';
    link.onclick = function(event) {
      event.preventDefault();
      clearAriveCacheAndCookies();
    };
    
    if (container.firstChild) {
        container.insertBefore(link, container.firstChild);
    } else {
        container.appendChild(link);
    }
    console.log('Arive Cleaner: Login page link injected.');
  }

  function getLikelyCookiePaths(currentPath) {
    const paths = new Set(['/']); 
    if (currentPath && currentPath !== '/') {
        const segments = currentPath.split('/').filter(s => s.length > 0);
        let currentBuiltPath = '';
        for (const segment of segments) {
            currentBuiltPath += '/' + segment;
            paths.add(currentBuiltPath);
            if (currentBuiltPath !== '/' && !currentBuiltPath.endsWith('/')) {
                 paths.add(currentBuiltPath + '/');
            }
        }
    }
    return Array.from(paths);
  }

  function clearAriveCacheAndCookies() {
    localStorage.clear();
    sessionStorage.clear();
    console.log(`Arive Cleaner: Cleared localStorage and sessionStorage for ${location.hostname}`);

    const domainsToClearForCookies = new Set();
    domainsToClearForCookies.add(location.hostname); 
    const currentHostnameParts = location.hostname.split('.');
    if (currentHostnameParts.length > 1) {
      const parentDomain = currentHostnameParts.slice(-2).join('.');
      domainsToClearForCookies.add(parentDomain);       
      domainsToClearForCookies.add('.' + parentDomain);
    }
    
    domainsToClearForCookies.add('myarive.com');
    domainsToClearForCookies.add('.myarive.com');

    if (location.hostname.includes('auth.lendwize.io')) {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUriParam = urlParams.get('redirect_uri');
        if (redirectUriParam) {
          const redirectUrl = new URL(redirectUriParam);
          if (redirectUrl.hostname.endsWith('.myarive.com')) {
            domainsToClearForCookies.add(redirectUrl.hostname);
          }
        }
      } catch (e) {
        console.warn('Arive Cleaner: Could not parse redirect_uri from login page.', e);
      }
    }

    const uniqueDomains = Array.from(domainsToClearForCookies);
    console.log('Arive Cleaner: Attempting to clear cookies for domains:', uniqueDomains);

    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (!name) continue;

      uniqueDomains.forEach(domain => {
        const pathsToTry = new Set(['/']);
        if (!domain.includes('myarive.com') && location.hostname === domain) {
          const currentDomainPaths = getLikelyCookiePaths(location.pathname);
          currentDomainPaths.forEach(p => pathsToTry.add(p));
        }

        pathsToTry.forEach(path => {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${domain}`;
          if (domain === location.hostname) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
          }
        });
      });
    }
    
    console.log('Arive Cleaner: Cookie clearing attempts finished. Reloading page.');
    location.reload();
  }
  
  if (location.hostname.includes('auth.lendwize.io')) {
    injectLoginLink();
  } else if (location.hostname.endsWith('.myarive.com')) {
    injectUserMenuButton();
  }

  const observer = new MutationObserver((mutationsList, observer) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            if (location.hostname.includes('auth.lendwize.io')) {
                if (!document.getElementById('clear-cache-login')) injectLoginLink();
            } else if (location.hostname.endsWith('.myarive.com')) {
                if (!document.getElementById('clear-cache-btn')) injectUserMenuButton();
            }
        }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

})();