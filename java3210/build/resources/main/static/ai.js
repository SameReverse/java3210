var sdkInstance = "appInsightsSDK"; window[sdkInstance] = "appInsights"; var aiName = window[sdkInstance], aisdk = window[aiName] || function (n) { var o = { config: n, initialize: !0 }, t = document, e = window, i = "script"; setTimeout(function () { var e = t.createElement(i); e.src = n.url || "https://js.monitor.azure.com/scripts/b/ai.2.min.js", t.getElementsByTagName(i)[0].parentNode.appendChild(e) }); try { o.cookie = t.cookie } catch (e) { } function a(n) { o[n] = function () { var e = arguments; o.queue.push(function () { o[n].apply(o, e) }) } } o.queue = [], o.version = 2; for (var s = ["Event", "PageView", "Exception", "Trace", "DependencyData", "Metric", "PageViewPerformance"]; s.length;)a("track" + s.pop()); var r = "Track", c = r + "Page"; a("start" + c), a("stop" + c); var u = r + "Event"; if (a("start" + u), a("stop" + u), a("addTelemetryInitializer"), a("setAuthenticatedUserContext"), a("clearAuthenticatedUserContext"), a("flush"), o.SeverityLevel = { Verbose: 0, Information: 1, Warning: 2, Error: 3, Critical: 4 }, !(!0 === n.disableExceptionTracking || n.extensionConfig && n.extensionConfig.ApplicationInsightsAnalytics && !0 === n.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)) { a("_" + (s = "onerror")); var p = e[s]; e[s] = function (e, n, t, i, a) { var r = p && p(e, n, t, i, a); return !0 !== r && o["_" + s]({ message: e, url: n, lineNumber: t, columnNumber: i, error: a }), r }, n.autoExceptionInstrumented = !0 } return o }(
    {
        connectionString: "InstrumentationKey=269437db-d278-4bd8-a4fb-87daeab3ff8c;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus2.livediagnostics.monitor.azure.com/;ApplicationId=ef6dbb8f-2995-43e1-a27a-a4fdb1bb59e0",
        loggingLevelTelemetry: "2",
        autoTrackPageVisitTime: "True",
        enableCorsCorrelation: "true",
        enableRequestHeaderTracking: "true",
        enableResponseHeaderTracking: "true",
        enablePerfMgr: "true",
        crossOrigin: "*",
        enableDebug: "true",
        perfEvtsSendAll: "true",
        AjaxErrorStatusText: "true"
    }
);
(window[aiName] = aisdk).queue && 0 === aisdk.queue.length && aisdk.trackPageView({}) && aisdk.dependency({}) && aisdk.trackTrace({});

var telemetryInitializer = (envelope) => {
    envelope.data.customattribute1 = 'customattribute 1';
    envelope.data.customattribute2 = 'customattribute 2';
    envelope.tags["ai.session.id"] = "session ID";
    envelope.tags["ai.user.id"] = "user ID";
    envelope.tags["ai.device.id"] = "Device ID";
    envelope.tags["ai.operation.name"] = "(JavaScript)(Browser side only)";
};
  appInsights.addTelemetryInitializer(telemetryInitializer);
  appInsights.trackTrace({message: 'client-side trace message'});