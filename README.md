It looks like window.getComputedStyle() in headless Chrome on OSX works incorrectly. 

All number values have commas instead of points, e.g:
- matrix 'matrix(0.1, 0.2, 0.3, 0.4, 0.5, 0.6)' applied to el.style.transform is returned as 'matrix(0,1, 0,2, 0,3, 0,4, 0,5, 0,6)'
- time '0.2s' assigned to el.style.transformDuration is returned as '0,2s'

To see that simply run:
`npm install`
and 
`npm test`

This is the result:
![test results](https://raw.githubusercontent.com/mateuszwozniak/chrome-karma-test/master/result.png)
