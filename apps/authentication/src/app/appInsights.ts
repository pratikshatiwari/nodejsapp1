import { ApplicationInsights } from '@microsoft/applicationinsights-web';
 
 
const appName = 'AuthenticationApp'; // Replace with the name of your microfrontend
 
const appInsights = new ApplicationInsights({
  config: {
  //  instrumentationKey: 'ddcf77d4-86f0-429e-b42b-d574be06f66f-1',
    instrumentationKey: 'ddcf77d4-86f0-429e-b42b-d574be06f66f',
    enableAutoRouteTracking: true, // Automatically track page views and route changes,
    enableDebug: true, // Enables debug messages
    loggingLevelConsole: 2, // Logs warnings and errors
    loggingLevelTelemetry: 2, // Sends warnings and errors to AI
  },
});
 
appInsights.loadAppInsights();
 
// Add custom telemetry initializer to set the app name
appInsights.addTelemetryInitializer((envelope) => {
  if (envelope.tags) {
    envelope.tags['ai.cloud.role'] = appName; // Set the app name
    envelope.tags['ai.cloud.roleInstance'] = `${appName}-${window.location.hostname}`; // Optional: Add hostname for better grouping
  }
});
 
export default appInsights;