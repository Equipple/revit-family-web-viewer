var rfa = require ('revit-family-web-viewer/dist/commonjs');

var options = new rfa.WebViewerOptions(
    'linear-gradient(141deg, #5D8CAE 0%, #317589 51%, #4D8FAC 75%)', // body background styling
    true,   // move scene origin to model center (calculated via bounding sphere)
    0.0009  // rotation speed and direction (backwards if negative)
);

var viewer = new rfa.WebViewer(options);                            // Create viewer object
viewer.init(document.getElementById('main'));                       // Set HTML host element

var modelJSON = (window.location.hash) ? window.location.hash.split('#')[1] : '6-Burner_Gas_Stove.json';
viewer.loadModelFromUrl('./dist/models/' + modelJSON + '.json');   // Load the model from JSON file

console.log('Revit Web Viewer has been initialized successfully!');
