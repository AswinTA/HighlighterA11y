"use strict";
var __extends = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }(),
    Microsoft;
! function(e) {
    e.ApplicationInsights || (e.ApplicationInsights = {})
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            return function() {}
        }();
        e.Base = t
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            return function() {
                this.ver = 1, this.sampleRate = 100, this.tags = {}
            }
        }();
        e.Envelope = t
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        e.Context || (e.Context = {})
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    e.ApplicationInsights || (e.ApplicationInsights = {})
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    e.ApplicationInsights || (e.ApplicationInsights = {})
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    e.ApplicationInsights || (e.ApplicationInsights = {})
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    ! function(e) {
        e[e.Verbose = 0] = "Verbose", e[e.Information = 1] = "Information", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.Critical = 4] = "Critical"
    }(e.SeverityLevel || (e.SeverityLevel = {}))
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    e.ApplicationInsights || (e.ApplicationInsights = {})
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t;
        ! function(e) {
            e[e.CRITICAL = 0] = "CRITICAL", e[e.WARNING = 1] = "WARNING"
        }(t = e.LoggingSeverity || (e.LoggingSeverity = {}));
        var n;
        ! function(e) {
            e[e.BrowserDoesNotSupportLocalStorage = 0] = "BrowserDoesNotSupportLocalStorage", e[e.BrowserCannotReadLocalStorage = 1] = "BrowserCannotReadLocalStorage", e[e.BrowserCannotReadSessionStorage = 2] = "BrowserCannotReadSessionStorage", e[e.BrowserCannotWriteLocalStorage = 3] = "BrowserCannotWriteLocalStorage", e[e.BrowserCannotWriteSessionStorage = 4] = "BrowserCannotWriteSessionStorage", e[e.BrowserFailedRemovalFromLocalStorage = 5] = "BrowserFailedRemovalFromLocalStorage", e[e.BrowserFailedRemovalFromSessionStorage = 6] = "BrowserFailedRemovalFromSessionStorage", e[e.CannotSendEmptyTelemetry = 7] = "CannotSendEmptyTelemetry", e[e.ClientPerformanceMathError = 8] = "ClientPerformanceMathError", e[e.ErrorParsingAISessionCookie = 9] = "ErrorParsingAISessionCookie", e[e.ErrorPVCalc = 10] = "ErrorPVCalc", e[e.ExceptionWhileLoggingError = 11] = "ExceptionWhileLoggingError", e[e.FailedAddingTelemetryToBuffer = 12] = "FailedAddingTelemetryToBuffer", e[e.FailedMonitorAjaxAbort = 13] = "FailedMonitorAjaxAbort", e[e.FailedMonitorAjaxDur = 14] = "FailedMonitorAjaxDur", e[e.FailedMonitorAjaxOpen = 15] = "FailedMonitorAjaxOpen", e[e.FailedMonitorAjaxRSC = 16] = "FailedMonitorAjaxRSC", e[e.FailedMonitorAjaxSend = 17] = "FailedMonitorAjaxSend", e[e.FailedMonitorAjaxGetCorrelationHeader = 18] = "FailedMonitorAjaxGetCorrelationHeader", e[e.FailedToAddHandlerForOnBeforeUnload = 19] = "FailedToAddHandlerForOnBeforeUnload", e[e.FailedToSendQueuedTelemetry = 20] = "FailedToSendQueuedTelemetry", e[e.FailedToReportDataLoss = 21] = "FailedToReportDataLoss", e[e.FlushFailed = 22] = "FlushFailed", e[e.MessageLimitPerPVExceeded = 23] = "MessageLimitPerPVExceeded", e[e.MissingRequiredFieldSpecification = 24] = "MissingRequiredFieldSpecification", e[e.NavigationTimingNotSupported = 25] = "NavigationTimingNotSupported", e[e.OnError = 26] = "OnError", e[e.SessionRenewalDateIsZero = 27] = "SessionRenewalDateIsZero", e[e.SenderNotInitialized = 28] = "SenderNotInitialized", e[e.StartTrackEventFailed = 29] = "StartTrackEventFailed", e[e.StopTrackEventFailed = 30] = "StopTrackEventFailed", e[e.StartTrackFailed = 31] = "StartTrackFailed", e[e.StopTrackFailed = 32] = "StopTrackFailed", e[e.TelemetrySampledAndNotSent = 33] = "TelemetrySampledAndNotSent", e[e.TrackEventFailed = 34] = "TrackEventFailed", e[e.TrackExceptionFailed = 35] = "TrackExceptionFailed", e[e.TrackMetricFailed = 36] = "TrackMetricFailed", e[e.TrackPVFailed = 37] = "TrackPVFailed", e[e.TrackPVFailedCalc = 38] = "TrackPVFailedCalc", e[e.TrackTraceFailed = 39] = "TrackTraceFailed", e[e.TransmissionFailed = 40] = "TransmissionFailed", e[e.FailedToSetStorageBuffer = 41] = "FailedToSetStorageBuffer", e[e.FailedToRestoreStorageBuffer = 42] = "FailedToRestoreStorageBuffer", e[e.InvalidBackendResponse = 43] = "InvalidBackendResponse", e[e.FailedToFixDepricatedValues = 44] = "FailedToFixDepricatedValues", e[e.InvalidDurationValue = 45] = "InvalidDurationValue", e[e.CannotSerializeObject = 46] = "CannotSerializeObject", e[e.CannotSerializeObjectNonSerializable = 47] = "CannotSerializeObjectNonSerializable", e[e.CircularReferenceDetected = 48] = "CircularReferenceDetected", e[e.ClearAuthContextFailed = 49] = "ClearAuthContextFailed", e[e.ExceptionTruncated = 50] = "ExceptionTruncated", e[e.IllegalCharsInName = 51] = "IllegalCharsInName", e[e.ItemNotInArray = 52] = "ItemNotInArray", e[e.MaxAjaxPerPVExceeded = 53] = "MaxAjaxPerPVExceeded", e[e.MessageTruncated = 54] = "MessageTruncated", e[e.NameTooLong = 55] = "NameTooLong", e[e.SampleRateOutOfRange = 56] = "SampleRateOutOfRange", e[e.SetAuthContextFailed = 57] = "SetAuthContextFailed", e[e.SetAuthContextFailedAccountName = 58] = "SetAuthContextFailedAccountName", e[e.StringValueTooLong = 59] = "StringValueTooLong", e[e.StartCalledMoreThanOnce = 60] = "StartCalledMoreThanOnce", e[e.StopCalledWithoutStart = 61] = "StopCalledWithoutStart", e[e.TelemetryInitializerFailed = 62] = "TelemetryInitializerFailed", e[e.TrackArgumentsNotSpecified = 63] = "TrackArgumentsNotSpecified", e[e.UrlTooLong = 64] = "UrlTooLong", e[e.SessionStorageBufferFull = 65] = "SessionStorageBufferFull", e[e.CannotAccessCookie = 66] = "CannotAccessCookie", e[e.IdTooLong = 67] = "IdTooLong"
        }(n = e._InternalMessageId || (e._InternalMessageId = {}));
        var i = function() {
            function e(t, i, o, a) {
                void 0 === o && (o = !1), this.messageId = t, this.message = (o ? e.AiUserActionablePrefix : e.AiNonUserActionablePrefix) + n[t].toString();
                var r = (i ? " message:" + e.sanitizeDiagnosticText(i) : "") + (a ? " props:" + e.sanitizeDiagnosticText(JSON.stringify(a)) : "");
                this.message += r
            }
            return e.sanitizeDiagnosticText = function(e) {
                return '"' + e.replace(/\"/g, "") + '"'
            }, e.AiNonUserActionablePrefix = "AI (Internal): ", e.AiUserActionablePrefix = "AI: ", e
        }();
        e._InternalLogMessage = i;
        var o = function() {
            function o() {}
            return o.throwInternal = function(e, t, o, a, r) {
                void 0 === r && (r = !1);
                var s = new i(t, o, r, a);
                if (this.enableDebugExceptions()) throw s;
                if (void 0 !== s && s && "undefined" != typeof s.message) {
                    if (r) {
                        var l = n[s.messageId];
                        this._messageLogged[l] && !this.verboseLogging() || (this.warnToConsole(s.message), this._messageLogged[l] = !0)
                    } else this.verboseLogging() && this.warnToConsole(s.message);
                    this.logInternalMessage(e, s)
                }
            }, o.warnToConsole = function(e) {
                "undefined" != typeof console && console && ("function" == typeof console.warn ? console.warn(e) : "function" == typeof console.log && console.log(e))
            }, o.resetInternalMessageCount = function() {
                this._messageCount = 0, this._messageLogged = {}
            }, o.clearInternalMessageLoggedTypes = function() {
                if (e.Util.canUseSessionStorage())
                    for (var t = e.Util.getSessionStorageKeys(), n = 0; n < t.length; n++) 0 === t[n].indexOf(o.AIInternalMessagePrefix) && e.Util.removeSessionStorage(t[n])
            }, o.setMaxInternalMessageLimit = function(e) {
                if (!e) throw new Error("limit cannot be undefined.");
                this.MAX_INTERNAL_MESSAGE_LIMIT = e
            }, o.logInternalMessage = function(a, r) {
                if (!this._areInternalMessagesThrottled()) {
                    var s = !0,
                        l = o.AIInternalMessagePrefix + n[r.messageId];
                    if (e.Util.canUseSessionStorage() ? e.Util.getSessionStorage(l) ? s = !1 : e.Util.setSessionStorage(l, "1") : this._messageLogged[l] ? s = !1 : this._messageLogged[l] = !0, s && ((this.verboseLogging() || a === t.CRITICAL) && (this.queue.push(r), this._messageCount++), this._messageCount == this.MAX_INTERNAL_MESSAGE_LIMIT)) {
                        var c = "Internal events throttle limit per PageView reached for this app.",
                            u = new i(n.MessageLimitPerPVExceeded, c, !1);
                        this.queue.push(u), this.warnToConsole(c)
                    }
                }
            }, o._areInternalMessagesThrottled = function() {
                return this._messageCount >= this.MAX_INTERNAL_MESSAGE_LIMIT
            }, o.AIInternalMessagePrefix = "AITR_", o.enableDebugExceptions = function() {
                return !1
            }, o.verboseLogging = function() {
                return !1
            }, o.queue = [], o.MAX_INTERNAL_MESSAGE_LIMIT = 25, o._messageCount = 0, o._messageLogged = {}, o
        }();
        e._InternalLogging = o
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function e() {}
            return e.newId = function() {
                for (var e = "", t = 1073741824 * Math.random(); t > 0;) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t % 64), t = Math.floor(t / 64);
                return e
            }, e
        }();
        e.UtilHelpers = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t;
        ! function(e) {
            e[e.LocalStorage = 0] = "LocalStorage", e[e.SessionStorage = 1] = "SessionStorage"
        }(t || (t = {}));
        var n = function() {
            function n() {}
            return n.disableStorage = function() {
                n._canUseLocalStorage = !1, n._canUseSessionStorage = !1
            }, n._getLocalStorageObject = function() {
                return n.canUseLocalStorage() ? n._getVerifiedStorageObject(t.LocalStorage) : null
            }, n._getVerifiedStorageObject = function(e) {
                var n, i, o = null;
                try {
                    i = new Date, (o = e === t.LocalStorage ? window.localStorage : window.sessionStorage).setItem(i, i), n = o.getItem(i) != i, o.removeItem(i), n && (o = null)
                } catch (a) {
                    o = null
                }
                return o
            }, n.isInternalApplicationInsightsEndpoint = function(e) {
                return -1 !== n._internalEndpoints.indexOf(e.toLowerCase())
            }, n.canUseLocalStorage = function() {
                return n._canUseLocalStorage === undefined && (n._canUseLocalStorage = !!n._getVerifiedStorageObject(t.LocalStorage)), n._canUseLocalStorage
            }, n.getStorage = function(t) {
                var i = n._getLocalStorageObject();
                if (null !== i) try {
                    return i.getItem(t)
                } catch (o) {
                    n._canUseLocalStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + n.getExceptionName(o), {
                        exception: n.dump(o)
                    })
                }
                return null
            }, n.setStorage = function(t, i) {
                var o = n._getLocalStorageObject();
                if (null !== o) try {
                    return o.setItem(t, i), !0
                } catch (a) {
                    n._canUseLocalStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + n.getExceptionName(a), {
                        exception: n.dump(a)
                    })
                }
                return !1
            }, n.removeStorage = function(t) {
                var i = n._getLocalStorageObject();
                if (null !== i) try {
                    return i.removeItem(t), !0
                } catch (o) {
                    n._canUseLocalStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + n.getExceptionName(o), {
                        exception: n.dump(o)
                    })
                }
                return !1
            }, n._getSessionStorageObject = function() {
                return n.canUseSessionStorage() ? n._getVerifiedStorageObject(t.SessionStorage) : null
            }, n.canUseSessionStorage = function() {
                return n._canUseSessionStorage === undefined && (n._canUseSessionStorage = !!n._getVerifiedStorageObject(t.SessionStorage)), n._canUseSessionStorage
            }, n.getSessionStorageKeys = function() {
                var e = [];
                if (n.canUseSessionStorage())
                    for (var t in window.sessionStorage) e.push(t);
                return e
            }, n.getSessionStorage = function(t) {
                var i = n._getSessionStorageObject();
                if (null !== i) try {
                    return i.getItem(t)
                } catch (o) {
                    n._canUseSessionStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + n.getExceptionName(o), {
                        exception: n.dump(o)
                    })
                }
                return null
            }, n.setSessionStorage = function(t, i) {
                var o = n._getSessionStorageObject();
                if (null !== o) try {
                    return o.setItem(t, i), !0
                } catch (a) {
                    n._canUseSessionStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + n.getExceptionName(a), {
                        exception: n.dump(a)
                    })
                }
                return !1
            }, n.removeSessionStorage = function(t) {
                var i = n._getSessionStorageObject();
                if (null !== i) try {
                    return i.removeItem(t), !0
                } catch (o) {
                    n._canUseSessionStorage = !1, e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserFailedRemovalFromSessionStorage, "Browser failed removal of session storage item. " + n.getExceptionName(o), {
                        exception: n.dump(o)
                    })
                }
                return !1
            }, n.disableCookies = function() {
                n._canUseCookies = !1
            }, n.canUseCookies = function() {
                if (n._canUseCookies === undefined) {
                    n._canUseCookies = !1;
                    try {
                        n._canUseCookies = n.document.cookie !== undefined
                    } catch (t) {
                        e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.CannotAccessCookie, "Cannot access document.cookie - " + n.getExceptionName(t), {
                            exception: n.dump(t)
                        })
                    }
                }
                return n._canUseCookies
            }, n.setCookie = function(e, t, i) {
                var o = "",
                    a = "";
                i && (o = ";domain=" + i), n.document.location && "https:" === n.document.location.protocol && (a = ";secure"), n.canUseCookies() && (n.document.cookie = e + "=" + t + o + ";path=/" + a)
            }, n.stringToBoolOrDefault = function(e, t) {
                return void 0 === t && (t = !1), e === undefined || null === e ? t : "true" === e.toString().toLowerCase()
            }, n.getCookie = function(e) {
                if (n.canUseCookies()) {
                    var t = "";
                    if (e && e.length)
                        for (var i = e + "=", o = n.document.cookie.split(";"), a = 0; a < o.length; a++) {
                            var r = o[a];
                            if ((r = n.trim(r)) && 0 === r.indexOf(i)) {
                                t = r.substring(i.length, o[a].length);
                                break
                            }
                        }
                    return t
                }
            }, n.deleteCookie = function(e) {
                n.canUseCookies() && (n.document.cookie = e + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            }, n.trim = function(e) {
                return "string" != typeof e ? e : e.replace(/^\s+|\s+$/g, "")
            }, n.newId = function() {
                return e.UtilHelpers.newId()
            }, n.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, n.isError = function(e) {
                return "[object Error]" === Object.prototype.toString.call(e)
            }, n.isDate = function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            }, n.toISOStringForIE8 = function(e) {
                if (n.isDate(e)) {
                    if (Date.prototype.toISOString) return e.toISOString();
                    var t = function(e) {
                        var t = String(e);
                        return 1 === t.length && (t = "0" + t), t
                    };
                    return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                }
            }, n.getIEVersion = function(e) {
                void 0 === e && (e = null);
                var t = e ? e.toLowerCase() : navigator.userAgent.toLowerCase();
                return -1 != t.indexOf("msie") ? parseInt(t.split("msie")[1]) : null
            }, n.msToTimeSpan = function(e) {
                (isNaN(e) || e < 0) && (e = 0);
                var t = "" + (e = Math.round(e)) % 1e3,
                    n = "" + Math.floor(e / 1e3) % 60,
                    i = "" + Math.floor(e / 6e4) % 60,
                    o = "" + Math.floor(e / 36e5) % 24,
                    a = Math.floor(e / 864e5);
                return t = 1 === t.length ? "00" + t : 2 === t.length ? "0" + t : t, n = n.length < 2 ? "0" + n : n, i = i.length < 2 ? "0" + i : i, o = o.length < 2 ? "0" + o : o, (a > 0 ? a + "." : "") + o + ":" + i + ":" + n + "." + t
            }, n.isCrossOriginError = function(e, t, n, i, o) {
                return ("Script error." === e || "Script error" === e) && !o
            }, n.dump = function(e) {
                var t = Object.prototype.toString.call(e),
                    n = JSON.stringify(e);
                return "[object Error]" === t && (n = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e.name + "'"), t + n
            }, n.getExceptionName = function(e) {
                return "[object Error]" === Object.prototype.toString.call(e) ? e.name : ""
            }, n.addEventHandler = function(e, t) {
                if (!window || "string" != typeof e || "function" != typeof t) return !1;
                var n = "on" + e;
                if (window.addEventListener) window.addEventListener(e, t, !1);
                else {
                    if (!window.attachEvent) return !1;
                    window.attachEvent(n, t)
                }
                return !0
            }, n.IsBeaconApiSupported = function() {
                return "sendBeacon" in navigator && navigator.sendBeacon
            }, n.document = "undefined" != typeof document ? document : {}, n._canUseCookies = undefined, n._canUseLocalStorage = undefined, n._canUseSessionStorage = undefined, n._internalEndpoints = ["https://dc.services.visualstudio.com/v2/track", "https://breeze.aimon.applicationinsights.io/v2/track", "https://dc-int.services.visualstudio.com/v2/track"], n.NotSpecified = "not_specified", n
        }();
        e.Util = n;
        var i = function() {
            function e() {}
            return e.parseUrl = function(t) {
                return e.htmlAnchorElement || (e.htmlAnchorElement = e.document.createElement ? e.document.createElement("a") : {}), e.htmlAnchorElement.href = t, e.htmlAnchorElement
            }, e.getAbsoluteUrl = function(t) {
                var n, i = e.parseUrl(t);
                return i && (n = i.href), n
            }, e.getPathName = function(t) {
                var n, i = e.parseUrl(t);
                return i && (n = i.pathname), n
            }, e.getCompleteUrl = function(e, t) {
                return e ? e.toUpperCase() + " " + t : t
            }, e.document = "undefined" != typeof document ? document : {}, e
        }();
        e.UrlHelper = i;
        var o = function() {
            function t() {}
            return t.canIncludeCorrelationHeader = function(e, t, n) {
                if (e && e.disableCorrelationHeaders) return !1;
                if (!t) return !1;
                var o = i.parseUrl(t).host.toLowerCase();
                if (!(e && e.enableCorsCorrelation || o === n)) return !1;
                var a = e && e.correlationHeaderExcludedDomains;
                if (!a || 0 == a.length) return !0;
                for (var r = 0; r < a.length; r++)
                    if (new RegExp(a[r].toLowerCase().replace(/\./g, ".").replace(/\*/g, ".*")).test(o)) return !1;
                return !0
            }, t.getCorrelationContext = function(n) {
                if (n) {
                    var i = t.getCorrelationContextValue(n, e.RequestHeaders.requestContextTargetKey);
                    if (i && i !== t.correlationIdPrefix) return i
                }
            }, t.getCorrelationContextValue = function(e, t) {
                if (e)
                    for (var n = e.split(","), i = 0; i < n.length; ++i) {
                        var o = n[i].split("=");
                        if (2 == o.length && o[0] == t) return o[1]
                    }
            }, t.correlationIdPrefix = "cid-v1:", t
        }();
        e.CorrelationIdHelper = o
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t;
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Required = 1] = "Required", e[e.Array = 2] = "Array", e[e.Hidden = 4] = "Hidden"
        }(t = e.FieldType || (e.FieldType = {}));
        var n = function() {
            function n() {}
            return n.serialize = function(e) {
                var t = n._serializeObject(e, "root");
                return JSON.stringify(t)
            }, n._serializeObject = function(i, o) {
                var a = {};
                if (!i) return e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.CannotSerializeObject, "cannot serialize object because it is null or undefined", {
                    name: o
                }, !0), a;
                if (i.__aiCircularRefCheck) return e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.CircularReferenceDetected, "Circular reference detected while serializing object", {
                    name: o
                }, !0), a;
                if (!i.aiDataContract) {
                    if ("measurements" === o) a = n._serializeStringMap(i, "number", o);
                    else if ("properties" === o) a = n._serializeStringMap(i, "string", o);
                    else if ("tags" === o) a = n._serializeStringMap(i, "string", o);
                    else if (e.Util.isArray(i)) a = n._serializeArray(i, o);
                    else {
                        e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.CannotSerializeObjectNonSerializable, "Attempting to serialize an object which does not implement ISerializable", {
                            name: o
                        }, !0);
                        try {
                            JSON.stringify(i), a = i
                        } catch (f) {
                            e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.CannotSerializeObject, f && "function" == typeof f.toString ? f.toString() : "Error serializing object", null, !0)
                        }
                    }
                    return a
                }
                i.__aiCircularRefCheck = !0;
                for (var r in i.aiDataContract) {
                    var s = i.aiDataContract[r],
                        l = "function" == typeof s ? s() & t.Required : s & t.Required,
                        c = "function" == typeof s ? s() & t.Hidden : s & t.Hidden,
                        u = s & t.Array,
                        g = i[r] !== undefined,
                        p = "object" == typeof i[r] && null !== i[r];
                    if (!l || g || u) {
                        if (!c) {
                            var d;
                            (d = p ? u ? n._serializeArray(i[r], r) : n._serializeObject(i[r], r) : i[r]) !== undefined && (a[r] = d)
                        }
                    } else e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.MissingRequiredFieldSpecification, "Missing required field specification. The field is required but not present on source", {
                        field: r,
                        name: o
                    })
                }
                return delete i.__aiCircularRefCheck, a
            }, n._serializeArray = function(t, i) {
                var o = undefined;
                if (t)
                    if (e.Util.isArray(t)) {
                        o = [];
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a],
                                s = n._serializeObject(r, i + "[" + a + "]");
                            o.push(s)
                        }
                    } else e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.ItemNotInArray, "This field was specified as an array in the contract but the item is not an array.\r\n", {
                        name: i
                    }, !0);
                return o
            }, n._serializeStringMap = function(t, n, i) {
                var o = undefined;
                if (t) {
                    o = {};
                    for (var a in t) {
                        var r = t[a];
                        if ("string" === n) r === undefined ? o[a] = "undefined" : null === r ? o[a] = "null" : r.toString ? o[a] = r.toString() : o[a] = "invalid field: toString() is not defined.";
                        else if ("number" === n)
                            if (r === undefined) o[a] = "undefined";
                            else if (null === r) o[a] = "null";
                        else {
                            var s = parseFloat(r);
                            isNaN(s) ? o[a] = "NaN" : o[a] = s
                        } else o[a] = "invalid field: " + i + " is of unknown type.", e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, o[a], null, !0)
                    }
                }
                return o
            }, n
        }();
        e.Serializer = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        ! function(n) {
            ! function(n) {
                var i = function(e) {
                    function i(i, o) {
                        var a = e.call(this) || this;
                        return a.name = n.DataSanitizer.sanitizeString(o) || t.Util.NotSpecified, a.data = i, a.time = t.Util.toISOStringForIE8(new Date), a.aiDataContract = {
                            time: t.FieldType.Required,
                            iKey: t.FieldType.Required,
                            name: t.FieldType.Required,
                            sampleRate: function() {
                                return 100 == a.sampleRate ? t.FieldType.Hidden : t.FieldType.Required
                            },
                            tags: t.FieldType.Required,
                            data: t.FieldType.Required
                        }, a
                    }
                    return __extends(i, e), i
                }(e.Telemetry.Envelope);
                n.Envelope = i
            }(n.Common || (n.Common = {}))
        }(t.Telemetry || (t.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        ! function(t) {
            ! function(t) {
                var n = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.aiDataContract = {}, t
                    }
                    return __extends(t, e), t
                }(e.Telemetry.Base);
                t.Base = n
            }(t.Common || (t.Common = {}))
        }(t.Telemetry || (t.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    var t = function() {
        return function() {
            this.applicationVersion = "ai.application.ver", this.applicationBuild = "ai.application.build", this.applicationTypeId = "ai.application.typeId", this.applicationId = "ai.application.applicationId", this.applicationLayer = "ai.application.layer", this.deviceId = "ai.device.id", this.deviceIp = "ai.device.ip", this.deviceLanguage = "ai.device.language", this.deviceLocale = "ai.device.locale", this.deviceModel = "ai.device.model", this.deviceFriendlyName = "ai.device.friendlyName", this.deviceNetwork = "ai.device.network", this.deviceNetworkName = "ai.device.networkName", this.deviceOEMName = "ai.device.oemName", this.deviceOS = "ai.device.os", this.deviceOSVersion = "ai.device.osVersion", this.deviceRoleInstance = "ai.device.roleInstance", this.deviceRoleName = "ai.device.roleName", this.deviceScreenResolution = "ai.device.screenResolution", this.deviceType = "ai.device.type", this.deviceMachineName = "ai.device.machineName", this.deviceVMName = "ai.device.vmName", this.deviceBrowser = "ai.device.browser", this.deviceBrowserVersion = "ai.device.browserVersion", this.locationIp = "ai.location.ip", this.locationCountry = "ai.location.country", this.locationProvince = "ai.location.province", this.locationCity = "ai.location.city", this.operationId = "ai.operation.id", this.operationName = "ai.operation.name", this.operationParentId = "ai.operation.parentId", this.operationRootId = "ai.operation.rootId", this.operationSyntheticSource = "ai.operation.syntheticSource", this.operationCorrelationVector = "ai.operation.correlationVector", this.sessionId = "ai.session.id", this.sessionIsFirst = "ai.session.isFirst", this.sessionIsNew = "ai.session.isNew", this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate", this.userAccountId = "ai.user.accountId", this.userAgent = "ai.user.userAgent", this.userId = "ai.user.id", this.userStoreRegion = "ai.user.storeRegion", this.userAuthUserId = "ai.user.authUserId", this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate", this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate", this.cloudName = "ai.cloud.name", this.cloudRole = "ai.cloud.role", this.cloudRoleVer = "ai.cloud.roleVer", this.cloudRoleInstance = "ai.cloud.roleInstance", this.cloudEnvironment = "ai.cloud.environment", this.cloudLocation = "ai.cloud.location", this.cloudDeploymentUnit = "ai.cloud.deploymentUnit", this.internalSdkVersion = "ai.internal.sdkVersion", this.internalAgentVersion = "ai.internal.agentVersion", this.internalNodeName = "ai.internal.nodeName"
        }
    }();
    e.ContextTagKeys = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(e) {
            var t = function() {
                return function() {}
            }();
            e.Application = t
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(e) {
            var t = function() {
                return function() {
                    this.id = "browser", this.type = "Browser"
                }
            }();
            e.Device = t
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                return function(t) {
                    this.sdkVersion = (t.sdkExtension() ? t.sdkExtension() + "_" : "") + "javascript:" + e.Version
                }
            }();
            t.Internal = n
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(e) {
            var t = function() {
                return function() {}
            }();
            e.Location = t
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                return function() {
                    this.id = e.Util.newId(), window && window.location && window.location.pathname && (this.name = window.location.pathname)
                }
            }();
            t.Operation = n
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function e() {}
            return e.prototype.getHashCodeScore = function(t) {
                return 100 * (this.getHashCode(t) / e.INT_MAX_VALUE)
            }, e.prototype.getHashCode = function(t) {
                if ("" == t) return 0;
                for (; t.length < e.MIN_INPUT_LENGTH;) t = t.concat(t);
                for (var n = 5381, i = 0; i < t.length; ++i) n = (n << 5) + n + t.charCodeAt(i), n &= n;
                return Math.abs(n)
            }, e.INT_MAX_VALUE = 2147483647, e.MIN_INPUT_LENGTH = 8, e
        }();
        e.HashCodeScoreGenerator = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function t() {
                this.hashCodeGeneragor = new e.HashCodeScoreGenerator
            }
            return t.prototype.getSamplingScore = function(e) {
                var t = new AI.ContextTagKeys;
                return e.tags[t.userId] ? this.hashCodeGeneragor.getHashCodeScore(e.tags[t.userId]) : e.tags[t.operationId] ? this.hashCodeGeneragor.getHashCodeScore(e.tags[t.operationId]) : Math.random()
            }, t
        }();
        e.SamplingScoreGenerator = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                function t(t) {
                    this.INT_MAX_VALUE = 2147483647, (t > 100 || t < 0) && (e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SampleRateOutOfRange, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", {
                        samplingRate: t
                    }, !0), this.sampleRate = 100), this.sampleRate = t, this.samplingScoreGenerator = new e.SamplingScoreGenerator
                }
                return t.prototype.isSampledIn = function(e) {
                    return 100 == this.sampleRate || this.samplingScoreGenerator.getSamplingScore(e) < this.sampleRate
                }, t
            }();
            t.Sample = n
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                return function() {}
            }();
            t.Session = n;
            var i = function() {
                function t(e) {
                    e || (e = {}), "function" != typeof e.sessionExpirationMs && (e.sessionExpirationMs = function() {
                        return t.acquisitionSpan
                    }), "function" != typeof e.sessionRenewalMs && (e.sessionRenewalMs = function() {
                        return t.renewalSpan
                    }), this.config = e, this.automaticSession = new n
                }
                return t.prototype.update = function() {
                    this.automaticSession.id || this.initializeAutomaticSession();
                    var n = e.dateTime.Now(),
                        i = n - this.automaticSession.acquisitionDate > this.config.sessionExpirationMs(),
                        o = n - this.automaticSession.renewalDate > this.config.sessionRenewalMs();
                    i || o ? (this.automaticSession.isFirst = undefined, this.renew()) : (!this.cookieUpdatedTimestamp || n - this.cookieUpdatedTimestamp > t.cookieUpdateInterval) && (this.automaticSession.renewalDate = n, this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate))
                }, t.prototype.backup = function() {
                    this.setStorage(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate)
                }, t.prototype.initializeAutomaticSession = function() {
                    var t = e.Util.getCookie("ai_session");
                    if (t && "function" == typeof t.split) this.initializeAutomaticSessionWithData(t);
                    else {
                        var n = e.Util.getStorage("ai_session");
                        n && this.initializeAutomaticSessionWithData(n)
                    }
                    this.automaticSession.id || (this.automaticSession.isFirst = !0, this.renew())
                }, t.prototype.initializeAutomaticSessionWithData = function(t) {
                    var n = t.split("|");
                    n.length > 0 && (this.automaticSession.id = n[0]);
                    try {
                        if (n.length > 1) {
                            var i = +n[1];
                            this.automaticSession.acquisitionDate = +new Date(i), this.automaticSession.acquisitionDate = this.automaticSession.acquisitionDate > 0 ? this.automaticSession.acquisitionDate : 0
                        }
                        if (n.length > 2) {
                            var o = +n[2];
                            this.automaticSession.renewalDate = +new Date(o), this.automaticSession.renewalDate = this.automaticSession.renewalDate > 0 ? this.automaticSession.renewalDate : 0
                        }
                    } catch (a) {
                        e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.ErrorParsingAISessionCookie, "Error parsing ai_session cookie, session will be reset: " + e.Util.getExceptionName(a), {
                            exception: e.Util.dump(a)
                        })
                    }
                    0 == this.automaticSession.renewalDate && e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SessionRenewalDateIsZero, "AI session renewal date is 0, session will be reset.")
                }, t.prototype.renew = function() {
                    var t = e.dateTime.Now();
                    this.automaticSession.id = e.Util.newId(), this.automaticSession.acquisitionDate = t, this.automaticSession.renewalDate = t, this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate), e.Util.canUseLocalStorage() || e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.BrowserDoesNotSupportLocalStorage, "Browser does not support local storage. Session durations will be inaccurate.")
                }, t.prototype.setCookie = function(t, n, i) {
                    var o = n + this.config.sessionExpirationMs(),
                        a = i + this.config.sessionRenewalMs(),
                        r = new Date,
                        s = [t, n, i];
                    o < a ? r.setTime(o) : r.setTime(a);
                    var l = this.config.cookieDomain ? this.config.cookieDomain() : null;
                    e.Util.setCookie("ai_session", s.join("|") + ";expires=" + r.toUTCString(), l), this.cookieUpdatedTimestamp = e.dateTime.Now()
                }, t.prototype.setStorage = function(t, n, i) {
                    e.Util.setStorage("ai_session", [t, n, i].join("|"))
                }, t.acquisitionSpan = 864e5, t.renewalSpan = 18e5, t.cookieUpdateInterval = 6e4, t
            }();
            t._SessionManager = i
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                function t(n) {
                    var i = e.Util.getCookie(t.userCookieName);
                    if (i) {
                        var o = i.split(t.cookieSeparator);
                        o.length > 0 && (this.id = o[0])
                    }
                    if (this.config = n, !this.id) {
                        this.id = e.Util.newId();
                        var a = new Date,
                            r = e.Util.toISOStringForIE8(a);
                        this.accountAcquisitionDate = r, a.setTime(a.getTime() + 31536e6);
                        var s = [this.id, r],
                            l = this.config.cookieDomain ? this.config.cookieDomain() : undefined;
                        e.Util.setCookie(t.userCookieName, s.join(t.cookieSeparator) + ";expires=" + a.toUTCString(), l), e.Util.removeStorage("ai_session")
                    }
                    this.accountId = n.accountId ? n.accountId() : undefined;
                    var c = e.Util.getCookie(t.authUserCookieName);
                    if (c) {
                        var u = (c = decodeURI(c)).split(t.cookieSeparator);
                        u[0] && (this.authenticatedId = u[0]), u.length > 1 && u[1] && (this.accountId = u[1])
                    }
                }
                return t.prototype.setAuthenticatedUserContext = function(n, i, o) {
                    if (void 0 === o && (o = !1), !this.validateUserInput(n) || i && !this.validateUserInput(i)) e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SetAuthContextFailedAccountName, "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.", !0);
                    else {
                        this.authenticatedId = n;
                        var a = this.authenticatedId;
                        i && (this.accountId = i, a = [this.authenticatedId, this.accountId].join(t.cookieSeparator)), o && e.Util.setCookie(t.authUserCookieName, encodeURI(a), this.config.cookieDomain())
                    }
                }, t.prototype.clearAuthenticatedUserContext = function() {
                    this.authenticatedId = null, this.accountId = null, e.Util.deleteCookie(t.authUserCookieName)
                }, t.prototype.validateUserInput = function(e) {
                    return !("string" != typeof e || !e || e.match(/,|;|=| |\|/))
                }, t.cookieSeparator = "|", t.userCookieName = "ai_user", t.authUserCookieName = "ai_authUser", t
            }();
            t.User = n
        }(e.Context || (e.Context = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function e() {}
            return e.IsNullOrUndefined = function(e) {
                return void 0 === e || null === e
            }, e
        }();
        e.extensions = t;
        var n = function() {
            function e() {}
            return e.GetLength = function(e) {
                var n = 0;
                if (!t.IsNullOrUndefined(e)) {
                    var i = "";
                    try {
                        i = e.toString()
                    } catch (o) {}
                    n = i.length, n = isNaN(n) ? 0 : n
                }
                return n
            }, e
        }();
        e.stringUtils = n;
        var i = function() {
            function e() {}
            return e.Now = window.performance && window.performance.now && window.performance.timing ? function() {
                return window.performance.now() + window.performance.timing.navigationStart
            } : function() {
                return (new Date).getTime()
            }, e.GetDuration = function(e, n) {
                var i = null;
                return 0 === e || 0 === n || t.IsNullOrUndefined(e) || t.IsNullOrUndefined(n) || (i = n - e), i
            }, e
        }();
        e.dateTime = i;
        var o = function() {
            function e() {}
            return e.AttachEvent = function(e, n, i) {
                var o = !1;
                return t.IsNullOrUndefined(e) || (t.IsNullOrUndefined(e.attachEvent) ? t.IsNullOrUndefined(e.addEventListener) || (e.addEventListener(n, i, !1), o = !0) : (e.attachEvent("on" + n, i), o = !0)), o
            }, e.DetachEvent = function(e, n, i) {
                t.IsNullOrUndefined(e) || (t.IsNullOrUndefined(e.detachEvent) ? t.IsNullOrUndefined(e.removeEventListener) || e.removeEventListener(n, i, !1) : e.detachEvent("on" + n, i))
            }, e
        }();
        e.EventHelper = o;
        var a = function() {
            function t() {}
            return t.ParseDependencyPath = function(t, n, i) {
                var o, a;
                if (t && t.length > 0) {
                    var r = e.UrlHelper.parseUrl(t);
                    o = r.host, null != r.pathname ? ("/" !== (i = 0 === r.pathname.length ? "/" : r.pathname).charAt(0) && (i = "/" + i), a = e.Telemetry.Common.DataSanitizer.sanitizeString(n ? n + " " + i : i)) : a = e.Telemetry.Common.DataSanitizer.sanitizeString(t)
                } else o = i, a = i;
                return {
                    target: o,
                    name: a
                }
            }, t
        }();
        e.AjaxHelper = a
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            return function() {
                this.openDone = !1, this.setRequestHeaderDone = !1, this.sendDone = !1, this.abortDone = !1, this.onreadystatechangeCallbackAttached = !1
            }
        }();
        e.XHRMonitoringState = t;
        var n = function() {
            function n(n) {
                this.completed = !1, this.requestHeadersSize = null, this.ttfb = null, this.responseReceivingDuration = null, this.callbackDuration = null, this.ajaxTotalDuration = null, this.aborted = null, this.pageUrl = null, this.requestUrl = null, this.requestSize = 0, this.method = null, this.status = null, this.requestSentTime = null, this.responseStartedTime = null, this.responseFinishedTime = null, this.callbackFinishedTime = null, this.endTime = null, this.originalOnreadystatechage = null, this.xhrMonitoringState = new t, this.clientFailure = 0, this.CalculateMetrics = function() {
                    var t = this;
                    t.ajaxTotalDuration = Math.round(1e3 * e.dateTime.GetDuration(t.requestSentTime, t.responseFinishedTime)) / 1e3
                }, this.id = n
            }
            return n.prototype.getAbsoluteUrl = function() {
                return this.requestUrl ? e.UrlHelper.getAbsoluteUrl(this.requestUrl) : null
            }, n.prototype.getPathName = function() {
                return this.requestUrl ? e.Telemetry.Common.DataSanitizer.sanitizeUrl(e.UrlHelper.getCompleteUrl(this.method, this.requestUrl)) : null
            }, n
        }();
        e.ajaxRecord = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function e() {}
            return e.requestContextHeader = "Request-Context", e.requestContextTargetKey = "appId", e.requestContextAppIdFormat = "appId=cid-v1:", e.requestIdHeader = "Request-Id", e.sdkContextHeader = "Sdk-Context", e.sdkContextHeaderAppIdRequest = "appId", e.requestContextHeaderLowerCase = "request-context", e
        }();
        e.RequestHeaders = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            return function() {}
        }();
        e.Domain = t
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.properties = {}, t.measurements = {}, t
        }
        return __extends(t, e), t
    }(Microsoft.Telemetry.Domain);
    e.EventData = t
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.properties = {}, t.measurements = {}, t
        }
        return __extends(t, e), t
    }(e.EventData);
    e.PageViewData = t
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.success = !0, t.properties = {}, t.measurements = {}, t
        }
        return __extends(t, e), t
    }(Microsoft.Telemetry.Domain);
    e.RemoteDependencyData = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            ! function(t) {
                var n = function() {
                    function t() {}
                    return t.sanitizeKeyAndAddUniqueness = function(e, n) {
                        var i = e.length,
                            o = t.sanitizeKey(e);
                        if (o.length !== i) {
                            for (var a = 0, r = o; n[r] !== undefined;) a++, r = o.substring(0, t.MAX_NAME_LENGTH - 3) + t.padNumber(a);
                            o = r
                        }
                        return o
                    }, t.sanitizeKey = function(n) {
                        return n && (n = e.Util.trim(n.toString())).length > t.MAX_NAME_LENGTH && (n = n.substring(0, t.MAX_NAME_LENGTH), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.NameTooLong, "name is too long.  It has been truncated to " + t.MAX_NAME_LENGTH + " characters.", {
                            name: n
                        }, !0)), n
                    }, t.sanitizeString = function(n, i) {
                        return void 0 === i && (i = t.MAX_STRING_LENGTH), n && (i = i || t.MAX_STRING_LENGTH, (n = e.Util.trim(n)).toString().length > i && (n = n.toString().substring(0, i), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.StringValueTooLong, "string value is too long. It has been truncated to " + i + " characters.", {
                            value: n
                        }, !0))), n
                    }, t.sanitizeUrl = function(n) {
                        return t.sanitizeInput(n, t.MAX_URL_LENGTH, e._InternalMessageId.UrlTooLong)
                    }, t.sanitizeMessage = function(n) {
                        return n && n.length > t.MAX_MESSAGE_LENGTH && (n = n.substring(0, t.MAX_MESSAGE_LENGTH), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.MessageTruncated, "message is too long, it has been truncated to " + t.MAX_MESSAGE_LENGTH + " characters.", {
                            message: n
                        }, !0)), n
                    }, t.sanitizeException = function(n) {
                        return n && n.length > t.MAX_EXCEPTION_LENGTH && (n = n.substring(0, t.MAX_EXCEPTION_LENGTH), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.ExceptionTruncated, "exception is too long, it has been truncated to " + t.MAX_EXCEPTION_LENGTH + " characters.", {
                            exception: n
                        }, !0)), n
                    }, t.sanitizeProperties = function(e) {
                        if (e) {
                            var n = {};
                            for (var i in e) {
                                var o = t.sanitizeString(e[i], t.MAX_PROPERTY_LENGTH);
                                n[i = t.sanitizeKeyAndAddUniqueness(i, n)] = o
                            }
                            e = n
                        }
                        return e
                    }, t.sanitizeMeasurements = function(e) {
                        if (e) {
                            var n = {};
                            for (var i in e) {
                                var o = e[i];
                                n[i = t.sanitizeKeyAndAddUniqueness(i, n)] = o
                            }
                            e = n
                        }
                        return e
                    }, t.sanitizeId = function(n) {
                        return n ? t.sanitizeInput(n, t.MAX_ID_LENGTH, e._InternalMessageId.IdTooLong).toString() : n
                    }, t.sanitizeInput = function(t, n, i) {
                        return t && (t = e.Util.trim(t)).length > n && (t = t.substring(0, n), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, i, "input is too long, it has been truncated to " + n + " characters.", {
                            data: t
                        }, !0)), t
                    }, t.padNumber = function(e) {
                        var t = "00" + e;
                        return t.substr(t.length - 3)
                    }, t.MAX_NAME_LENGTH = 150, t.MAX_ID_LENGTH = 128, t.MAX_PROPERTY_LENGTH = 8192, t.MAX_STRING_LENGTH = 1024, t.MAX_URL_LENGTH = 2048, t.MAX_MESSAGE_LENGTH = 32768, t.MAX_EXCEPTION_LENGTH = 32768, t
                }();
                t.DataSanitizer = n
            }(t.Common || (t.Common = {}))
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(n) {
                function i(i, o, a, r, s, l, c, u, g) {
                    var p = n.call(this) || this;
                    p.aiDataContract = {
                        id: e.FieldType.Required,
                        ver: e.FieldType.Required,
                        name: e.FieldType.Default,
                        resultCode: e.FieldType.Default,
                        duration: e.FieldType.Default,
                        success: e.FieldType.Default,
                        data: e.FieldType.Default,
                        target: e.FieldType.Default,
                        type: e.FieldType.Default,
                        properties: e.FieldType.Default,
                        measurements: e.FieldType.Default,
                        kind: e.FieldType.Default,
                        value: e.FieldType.Default,
                        count: e.FieldType.Default,
                        min: e.FieldType.Default,
                        max: e.FieldType.Default,
                        stdDev: e.FieldType.Default,
                        dependencyKind: e.FieldType.Default,
                        dependencySource: e.FieldType.Default,
                        commandName: e.FieldType.Default,
                        dependencyTypeName: e.FieldType.Default
                    }, p.id = i, p.duration = e.Util.msToTimeSpan(r), p.success = s, p.resultCode = l + "", p.type = "Ajax", p.data = t.Common.DataSanitizer.sanitizeUrl(a);
                    var d = e.AjaxHelper.ParseDependencyPath(o, c, a);
                    return p.target = d.target, p.name = d.name, p.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(u), p.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(g), p
                }
                return __extends(i, n), i.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency", i.dataType = "RemoteDependencyData", i
            }(AI.RemoteDependencyData);
            t.RemoteDependencyData = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        var n = function() {
            function n(e) {
                this.currentWindowHost = window.location.host && window.location.host.toLowerCase(), this.appInsights = e, this.initialized = !1, this.Init()
            }
            return n.prototype.Init = function() {
                this.supportsMonitoring() && (this.instrumentOpen(), this.instrumentSend(), this.instrumentAbort(), this.initialized = !0)
            }, n.prototype.isMonitoredInstance = function(e, i) {
                return this.initialized && (!0 === i || !t.extensions.IsNullOrUndefined(e.ajaxData)) && !0 !== e[n.DisabledPropertyName]
            }, n.prototype.supportsMonitoring = function() {
                var e = !0;
                (t.extensions.IsNullOrUndefined(XMLHttpRequest) || t.extensions.IsNullOrUndefined(XMLHttpRequest.prototype) || t.extensions.IsNullOrUndefined(XMLHttpRequest.prototype.open) || t.extensions.IsNullOrUndefined(XMLHttpRequest.prototype.send) || t.extensions.IsNullOrUndefined(XMLHttpRequest.prototype.abort)) && (e = !1);
                try {
                    " a ".trim()
                } catch (n) {
                    e = !1
                }
                return e
            }, n.prototype.instrumentOpen = function() {
                var i = XMLHttpRequest.prototype.open,
                    o = this;
                XMLHttpRequest.prototype.open = function(a, r, s) {
                    try {
                        !o.isMonitoredInstance(this, !0) || this.ajaxData && this.ajaxData.xhrMonitoringState.openDone || o.openHandler(this, a, r, s)
                    } catch (l) {
                        t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.FailedMonitorAjaxOpen, "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(this),
                            exception: e.ApplicationInsights.Util.dump(l)
                        })
                    }
                    return i.apply(this, arguments)
                }
            }, n.prototype.openHandler = function(e, n, i, o) {
                var a = "|" + this.appInsights.context.operation.id + "." + t.Util.newId(),
                    r = new t.ajaxRecord(a);
                r.method = n, r.requestUrl = i, r.xhrMonitoringState.openDone = !0, e.ajaxData = r, this.attachToOnReadyStateChange(e)
            }, n.getFailedAjaxDiagnosticsMessage = function(e) {
                var n = "";
                try {
                    t.extensions.IsNullOrUndefined(e) || t.extensions.IsNullOrUndefined(e.ajaxData) || t.extensions.IsNullOrUndefined(e.ajaxData.requestUrl) || (n += "(url: '" + e.ajaxData.requestUrl + "')")
                } catch (i) {}
                return n
            }, n.prototype.instrumentSend = function() {
                var i = XMLHttpRequest.prototype.send,
                    o = this;
                XMLHttpRequest.prototype.send = function(a) {
                    try {
                        o.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.sendDone && o.sendHandler(this, a)
                    } catch (r) {
                        t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.FailedMonitorAjaxSend, "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(this),
                            exception: e.ApplicationInsights.Util.dump(r)
                        })
                    }
                    return i.apply(this, arguments)
                }
            }, n.prototype.sendHandler = function(e, n) {
                if (e.ajaxData.requestSentTime = t.dateTime.Now(), t.CorrelationIdHelper.canIncludeCorrelationHeader(this.appInsights.config, e.ajaxData.getAbsoluteUrl(), this.currentWindowHost) && (e.setRequestHeader(t.RequestHeaders.requestIdHeader, e.ajaxData.id), this.appInsights.context)) {
                    var i = this.appInsights.context.appId();
                    i && e.setRequestHeader(t.RequestHeaders.requestContextHeader, t.RequestHeaders.requestContextAppIdFormat + i)
                }
                e.ajaxData.xhrMonitoringState.sendDone = !0
            }, n.prototype.instrumentAbort = function() {
                var i = XMLHttpRequest.prototype.abort,
                    o = this;
                XMLHttpRequest.prototype.abort = function() {
                    try {
                        o.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.abortDone && (this.ajaxData.aborted = 1, this.ajaxData.xhrMonitoringState.abortDone = !0)
                    } catch (a) {
                        t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.FailedMonitorAjaxAbort, "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(this),
                            exception: e.ApplicationInsights.Util.dump(a)
                        })
                    }
                    return i.apply(this, arguments)
                }
            }, n.prototype.attachToOnReadyStateChange = function(i) {
                var o = this;
                i.ajaxData.xhrMonitoringState.onreadystatechangeCallbackAttached = t.EventHelper.AttachEvent(i, "readystatechange", function() {
                    try {
                        o.isMonitoredInstance(i) && 4 === i.readyState && o.onAjaxComplete(i)
                    } catch (r) {
                        var a = e.ApplicationInsights.Util.dump(r);
                        a && -1 != a.toLowerCase().indexOf("c00c023f") || t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.FailedMonitorAjaxRSC, "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(i),
                            exception: e.ApplicationInsights.Util.dump(r)
                        })
                    }
                })
            }, n.prototype.onAjaxComplete = function(e) {
                if (e.ajaxData.responseFinishedTime = t.dateTime.Now(), e.ajaxData.status = e.status, e.ajaxData.CalculateMetrics(), e.ajaxData.ajaxTotalDuration < 0) t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.FailedMonitorAjaxDur, "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.", {
                    ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(e),
                    requestSentTime: e.ajaxData.requestSentTime,
                    responseFinishedTime: e.ajaxData.responseFinishedTime
                });
                else {
                    var i = new t.Telemetry.RemoteDependencyData(e.ajaxData.id, e.ajaxData.getAbsoluteUrl(), e.ajaxData.getPathName(), e.ajaxData.ajaxTotalDuration, +e.ajaxData.status >= 200 && +e.ajaxData.status < 400, +e.ajaxData.status, e.ajaxData.method),
                        o = this.getCorrelationContext(e);
                    o && (i.target = i.target + " | " + o), this.appInsights.trackDependencyData(i), e.ajaxData = null
                }
            }, n.prototype.getCorrelationContext = function(i) {
                try {
                    var o = i.getAllResponseHeaders();
                    if (null !== o && -1 !== o.toLowerCase().indexOf(t.RequestHeaders.requestContextHeaderLowerCase)) {
                        var a = i.getResponseHeader(t.RequestHeaders.requestContextHeader);
                        return t.CorrelationIdHelper.getCorrelationContext(a)
                    }
                } catch (r) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.FailedMonitorAjaxGetCorrelationHeader, "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.", {
                        ajaxDiagnosticsMessage: n.getFailedAjaxDiagnosticsMessage(i),
                        exception: e.ApplicationInsights.Util.dump(r)
                    })
                }
            }, n.instrumentedByAppInsightsName = "InstrumentedByAppInsights", n.DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation", n
        }();
        t.AjaxMonitor = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function e(e) {
                this._config = e, this._buffer = []
            }
            return e.prototype.enqueue = function(e) {
                this._buffer.push(e)
            }, e.prototype.count = function() {
                return this._buffer.length
            }, e.prototype.clear = function() {
                this._buffer.length = 0
            }, e.prototype.getItems = function() {
                return this._buffer.slice(0)
            }, e.prototype.batchPayloads = function(e) {
                return e && e.length > 0 ? this._config.emitLineDelimitedJson() ? e.join("\n") : "[" + e.join(",") + "]" : null
            }, e.prototype.markAsSent = function(e) {
                this.clear()
            }, e.prototype.clearSent = function(e) {}, e
        }();
        e.ArraySendBuffer = t;
        var n = function() {
            function t(e) {
                this._bufferFullMessageSent = !1, this._config = e;
                var n = this.getBuffer(t.BUFFER_KEY),
                    i = this.getBuffer(t.SENT_BUFFER_KEY);
                this._buffer = n.concat(i), this._buffer.length > t.MAX_BUFFER_SIZE && (this._buffer.length = t.MAX_BUFFER_SIZE), this.setBuffer(t.SENT_BUFFER_KEY, []), this.setBuffer(t.BUFFER_KEY, this._buffer)
            }
            return t.prototype.enqueue = function(n) {
                this._buffer.length >= t.MAX_BUFFER_SIZE ? this._bufferFullMessageSent || (e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.SessionStorageBufferFull, "Maximum buffer size reached: " + this._buffer.length, !0), this._bufferFullMessageSent = !0) : (this._buffer.push(n), this.setBuffer(t.BUFFER_KEY, this._buffer))
            }, t.prototype.count = function() {
                return this._buffer.length
            }, t.prototype.clear = function() {
                this._buffer.length = 0, this.setBuffer(t.BUFFER_KEY, []), this.setBuffer(t.SENT_BUFFER_KEY, []), this._bufferFullMessageSent = !1
            }, t.prototype.getItems = function() {
                return this._buffer.slice(0)
            }, t.prototype.batchPayloads = function(e) {
                return e && e.length > 0 ? this._config.emitLineDelimitedJson() ? e.join("\n") : "[" + e.join(",") + "]" : null
            }, t.prototype.markAsSent = function(n) {
                this._buffer = this.removePayloadsFromBuffer(n, this._buffer), this.setBuffer(t.BUFFER_KEY, this._buffer);
                var i = this.getBuffer(t.SENT_BUFFER_KEY);
                i instanceof Array && n instanceof Array && ((i = i.concat(n)).length > t.MAX_BUFFER_SIZE && (e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.SessionStorageBufferFull, "Sent buffer reached its maximum size: " + i.length, !0), i.length = t.MAX_BUFFER_SIZE), this.setBuffer(t.SENT_BUFFER_KEY, i))
            }, t.prototype.clearSent = function(e) {
                var n = this.getBuffer(t.SENT_BUFFER_KEY);
                n = this.removePayloadsFromBuffer(e, n), this.setBuffer(t.SENT_BUFFER_KEY, n)
            }, t.prototype.removePayloadsFromBuffer = function(e, t) {
                var n = [];
                for (var i in t) {
                    var o = !1;
                    for (var a in e)
                        if (e[a] === t[i]) {
                            o = !0;
                            break
                        } o || n.push(t[i])
                }
                return n
            }, t.prototype.getBuffer = function(t) {
                try {
                    var n = e.Util.getSessionStorage(t);
                    if (n) {
                        var i = JSON.parse(n);
                        if (i) return i
                    }
                } catch (o) {
                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.FailedToRestoreStorageBuffer, " storage key: " + t + ", " + e.Util.getExceptionName(o), {
                        exception: e.Util.dump(o)
                    })
                }
                return []
            }, t.prototype.setBuffer = function(t, n) {
                try {
                    var i = JSON.stringify(n);
                    e.Util.setSessionStorage(t, i)
                } catch (o) {
                    e.Util.setSessionStorage(t, JSON.stringify([])), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.FailedToSetStorageBuffer, " storage key: " + t + ", " + e.Util.getExceptionName(o) + ". Buffer cleared", {
                        exception: e.Util.dump(o)
                    })
                }
            }, t.BUFFER_KEY = "AI_buffer", t.SENT_BUFFER_KEY = "AI_sentBuffer", t.MAX_BUFFER_SIZE = 2e3, t
        }();
        e.SessionStorageSendBuffer = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function t(t) {
                this._XMLHttpRequestSupported = !1, this._consecutiveErrors = 0, this._retryAt = null, this._lastSend = 0, this._config = t, this._sender = null, this._buffer = e.Util.canUseSessionStorage() && this._config.enableSessionStorageBuffer() ? new e.SessionStorageSendBuffer(t) : new e.ArraySendBuffer(t), !this._config.isBeaconApiDisabled() && e.Util.IsBeaconApiSupported() ? this._sender = this._beaconSender : "undefined" != typeof XMLHttpRequest && ("withCredentials" in new XMLHttpRequest ? (this._sender = this._xhrSender, this._XMLHttpRequestSupported = !0) : "undefined" != typeof XDomainRequest && (this._sender = this._xdrSender))
            }
            return t.prototype.send = function(t) {
                try {
                    if (this._config.disableTelemetry()) return;
                    if (!t) return void e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.CannotSendEmptyTelemetry, "Cannot send empty telemetry");
                    if (!this._sender) return void e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.SenderNotInitialized, "Sender was not initialized");
                    var n = e.Serializer.serialize(t),
                        i = this._buffer.getItems(),
                        o = this._buffer.batchPayloads(i);
                    o && o.length + n.length > this._config.maxBatchSizeInBytes() && this.triggerSend(), this._buffer.enqueue(n), this._setupTimer()
                } catch (a) {
                    e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.FailedAddingTelemetryToBuffer, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + e.Util.getExceptionName(a), {
                        exception: e.Util.dump(a)
                    })
                }
            }, t.prototype._setupTimer = function() {
                var e = this;
                if (!this._timeoutHandle) {
                    var t = this._retryAt ? Math.max(0, this._retryAt - Date.now()) : 0,
                        n = Math.max(this._config.maxBatchInterval(), t);
                    this._timeoutHandle = setTimeout(function() {
                        e.triggerSend()
                    }, n)
                }
            }, t.prototype._getSizeInBytes = function(e) {
                var t = 0;
                if (e && e.length)
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i && i.length && (t += i.length)
                    }
                return t
            }, t.prototype.triggerSend = function(t) {
                void 0 === t && (t = !0);
                try {
                    if (this._config.disableTelemetry()) this._buffer.clear();
                    else {
                        if (this._buffer.count() > 0) {
                            var n = this._buffer.getItems();
                            this._sender(n, t)
                        }
                        this._lastSend = +new Date
                    }
                    clearTimeout(this._timeoutHandle), this._timeoutHandle = null, this._retryAt = null
                } catch (i) {
                    (!e.Util.getIEVersion() || e.Util.getIEVersion() > 9) && e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + e.Util.getExceptionName(i), {
                        exception: e.Util.dump(i)
                    })
                }
            }, t.prototype._setRetryTime = function() {
                var e;
                if (this._consecutiveErrors <= 1) e = 10;
                else {
                    var t = (Math.pow(2, this._consecutiveErrors) - 1) / 2,
                        n = Math.floor(Math.random() * t * 10) + 1;
                    e = Math.max(Math.min(n, 3600), 10)
                }
                var i = Date.now() + 1e3 * e;
                this._retryAt = i
            }, t.prototype._parseResponse = function(t) {
                try {
                    if (t && "" !== t) {
                        var n = JSON.parse(t);
                        if (n && n.itemsReceived && n.itemsReceived >= n.itemsAccepted && n.itemsReceived - n.itemsAccepted == n.errors.length) return n
                    }
                } catch (i) {
                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.InvalidBackendResponse, "Cannot parse the response. " + e.Util.getExceptionName(i), {
                        response: t
                    })
                }
                return null
            }, t.prototype._isRetriable = function(e) {
                return 408 == e || 429 == e || 500 == e || 503 == e
            }, t.prototype._resendPayload = function(e) {
                if (e && 0 !== e.length) {
                    this._buffer.clearSent(e), this._consecutiveErrors++;
                    for (var t = 0, n = e; t < n.length; t++) {
                        var i = n[t];
                        this._buffer.enqueue(i)
                    }
                    this._setRetryTime(), this._setupTimer()
                }
            }, t.prototype._formatErrorMessageXhr = function(e, t) {
                return e ? "XMLHttpRequest,Status:" + e.status + ",Response:" + e.responseText || e.response || "" : t
            }, t.prototype._formatErrorMessageXdr = function(e, t) {
                return e ? "XDomainRequest,Response:" + e.responseText || "" : t
            }, t.prototype._xhrSender = function(t, n) {
                var i = this,
                    o = new XMLHttpRequest;
                o[e.AjaxMonitor.DisabledPropertyName] = !0, o.open("POST", this._config.endpointUrl(), n), o.setRequestHeader("Content-type", "application/json"), e.Util.isInternalApplicationInsightsEndpoint(this._config.endpointUrl()) && o.setRequestHeader(e.RequestHeaders.sdkContextHeader, e.RequestHeaders.sdkContextHeaderAppIdRequest), o.onreadystatechange = function() {
                    return i._xhrReadyStateChange(o, t, t.length)
                }, o.onerror = function(e) {
                    return i._onError(t, i._formatErrorMessageXhr(o), e)
                };
                var a = this._buffer.batchPayloads(t);
                o.send(a), this._buffer.markAsSent(t)
            }, t.prototype._xdrSender = function(t, n) {
                var i = this,
                    o = new XDomainRequest;
                o.onload = function() {
                    return i._xdrOnLoad(o, t)
                }, o.onerror = function(e) {
                    return i._onError(t, i._formatErrorMessageXdr(o), e)
                };
                var a = window.location.protocol;
                if (0 !== this._config.endpointUrl().lastIndexOf(a, 0)) return e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.TransmissionFailed, ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."), void this._buffer.clear();
                var r = this._config.endpointUrl().replace(/^(https?:)/, "");
                o.open("POST", r);
                var s = this._buffer.batchPayloads(t);
                o.send(s), this._buffer.markAsSent(t)
            }, t.prototype._beaconSender = function(t, n) {
                var i = this._config.endpointUrl(),
                    o = this._buffer.batchPayloads(t),
                    a = new Blob([o], {
                        type: "text/plain;charset=UTF-8"
                    });
                navigator.sendBeacon(i, a) ? this._buffer.markAsSent(t) : e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TransmissionFailed, ". Failed to send telemetry with Beacon API.")
            }, t.prototype._xhrReadyStateChange = function(t, n, i) {
                if (4 === t.readyState) {
                    var o = null;
                    this._appId || (o = this._parseResponse(t.responseText || t.response)) && o.appId && (this._appId = o.appId), (t.status < 200 || t.status >= 300) && 0 !== t.status ? !this._config.isRetryDisabled() && this._isRetriable(t.status) ? (this._resendPayload(n), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.TransmissionFailed, ". Response code " + t.status + ". Will retry to send " + n.length + " items.")) : this._onError(n, this._formatErrorMessageXhr(t)) : 206 === t.status ? (o || (o = this._parseResponse(t.responseText || t.response)), o && !this._config.isRetryDisabled() ? this._onPartialSuccess(n, o) : this._onError(n, this._formatErrorMessageXhr(t))) : (this._consecutiveErrors = 0, this._onSuccess(n, i))
                }
            }, t.prototype._xdrOnLoad = function(e, t) {
                if (!e || e.responseText + "" != "200" && "" !== e.responseText) {
                    var n = this._parseResponse(e.responseText);
                    n && n.itemsReceived && n.itemsReceived > n.itemsAccepted && !this._config.isRetryDisabled() ? this._onPartialSuccess(t, n) : this._onError(t, this._formatErrorMessageXdr(e))
                } else this._consecutiveErrors = 0, this._onSuccess(t, 0)
            }, t.prototype._onPartialSuccess = function(t, n) {
                for (var i = [], o = [], a = 0, r = n.errors.reverse(); a < r.length; a++) {
                    var s = r[a],
                        l = t.splice(s.index, 1)[0];
                    this._isRetriable(s.statusCode) ? o.push(l) : i.push(l)
                }
                t.length > 0 && this._onSuccess(t, n.itemsAccepted), i.length > 0 && this._onError(i, this._formatErrorMessageXhr(null, ["partial success", n.itemsAccepted, "of", n.itemsReceived].join(" "))), o.length > 0 && (this._resendPayload(o), e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.TransmissionFailed, "Partial success. Delivered: " + t.length + ", Failed: " + i.length + ". Will retry to send " + o.length + " our of " + n.itemsReceived + " items"))
            }, t.prototype._onError = function(t, n, i) {
                e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.OnError, "Failed to send telemetry.", {
                    message: n
                }), this._buffer.clearSent(t)
            }, t.prototype._onSuccess = function(e, t) {
                this._buffer.clearSent(e)
            }, t.MaxBeaconPayloadSize = 65536, t
        }();
        e.Sender = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.properties = {}, t
        }
        return __extends(t, e), t
    }(Microsoft.Telemetry.Domain);
    e.MessageData = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(n) {
                function i(i, o, a) {
                    var r = n.call(this) || this;
                    return r.aiDataContract = {
                        ver: e.FieldType.Required,
                        message: e.FieldType.Required,
                        severityLevel: e.FieldType.Default,
                        properties: e.FieldType.Default
                    }, i = i || e.Util.NotSpecified, r.message = t.Common.DataSanitizer.sanitizeMessage(i), r.properties = t.Common.DataSanitizer.sanitizeProperties(o), a && (r.severityLevel = a), r
                }
                return __extends(i, n), i.envelopeType = "Microsoft.ApplicationInsights.{0}.Message", i.dataType = "MessageData", i
            }(AI.MessageData);
            t.Trace = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(t) {
                function n(n, i, o) {
                    var a = t.call(this) || this;
                    return a.aiDataContract = {
                        ver: e.FieldType.Required,
                        name: e.FieldType.Required,
                        properties: e.FieldType.Default,
                        measurements: e.FieldType.Default
                    }, a.name = e.Telemetry.Common.DataSanitizer.sanitizeString(n) || e.Util.NotSpecified, a.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(i), a.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(o), a
                }
                return __extends(n, t), n.envelopeType = "Microsoft.ApplicationInsights.{0}.Event", n.dataType = "EventData", n
            }(AI.EventData);
            t.Event = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    var t = function() {
        return function() {
            this.hasFullStack = !0, this.parsedStack = []
        }
    }();
    e.ExceptionDetails = t
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.exceptions = [], t.properties = {}, t.measurements = {}, t
        }
        return __extends(t, e), t
    }(Microsoft.Telemetry.Domain);
    e.ExceptionData = t
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function() {
        return function() {}
    }();
    e.StackFrame = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(t) {
                function n(n, o, a, r) {
                    var s = t.call(this) || this;
                    return s.aiDataContract = {
                        ver: e.FieldType.Required,
                        exceptions: e.FieldType.Required,
                        severityLevel: e.FieldType.Default,
                        properties: e.FieldType.Default,
                        measurements: e.FieldType.Default
                    }, s.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(o), s.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(a), s.exceptions = [new i(n)], r && (s.severityLevel = r), s
                }
                return __extends(n, t), n.CreateSimpleException = function(e, t, n, i, o, a) {
                    return {
                        exceptions: [{
                            hasFullStack: !0,
                            message: e,
                            stack: o,
                            typeName: t
                        }]
                    }
                }, n.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception", n.dataType = "ExceptionData", n
            }(AI.ExceptionData);
            t.Exception = n;
            var i = function(n) {
                    function i(i) {
                        var o = n.call(this) || this;
                        o.aiDataContract = {
                            id: e.FieldType.Default,
                            outerId: e.FieldType.Default,
                            typeName: e.FieldType.Required,
                            message: e.FieldType.Required,
                            hasFullStack: e.FieldType.Default,
                            stack: e.FieldType.Default,
                            parsedStack: e.FieldType.Array
                        }, o.typeName = t.Common.DataSanitizer.sanitizeString(i.name) || e.Util.NotSpecified, o.message = t.Common.DataSanitizer.sanitizeMessage(i.message) || e.Util.NotSpecified;
                        var a = i.stack;
                        return o.parsedStack = o.parseStack(a), o.stack = t.Common.DataSanitizer.sanitizeException(a), o.hasFullStack = e.Util.isArray(o.parsedStack) && o.parsedStack.length > 0, o
                    }
                    return __extends(i, n), i.prototype.parseStack = function(e) {
                        var t = undefined;
                        if ("string" == typeof e) {
                            var n = e.split("\n");
                            t = [];
                            for (var i = 0, a = 0, r = 0; r <= n.length; r++) {
                                var s = n[r];
                                if (o.regex.test(s)) {
                                    var l = new o(n[r], i++);
                                    a += l.sizeInBytes, t.push(l)
                                }
                            }
                            if (a > 32768)
                                for (var c = 0, u = t.length - 1, g = 0, p = c, d = u; c < u;) {
                                    if ((g += t[c].sizeInBytes + t[u].sizeInBytes) > 32768) {
                                        var f = d - p + 1;
                                        t.splice(p, f);
                                        break
                                    }
                                    p = c, d = u, c++, u--
                                }
                        }
                        return t
                    }, i
                }(AI.ExceptionDetails),
                o = function(t) {
                    function n(i, o) {
                        var a = t.call(this) || this;
                        a.sizeInBytes = 0, a.aiDataContract = {
                            level: e.FieldType.Required,
                            method: e.FieldType.Required,
                            assembly: e.FieldType.Default,
                            fileName: e.FieldType.Default,
                            line: e.FieldType.Default
                        }, a.level = o, a.method = "<no_method>", a.assembly = e.Util.trim(i);
                        var r = i.match(n.regex);
                        return r && r.length >= 5 && (a.method = e.Util.trim(r[2]) || a.method, a.fileName = e.Util.trim(r[4]), a.line = parseInt(r[5]) || 0), a.sizeInBytes += a.method.length, a.sizeInBytes += a.fileName.length, a.sizeInBytes += a.assembly.length, a.sizeInBytes += n.baseSize, a.sizeInBytes += a.level.toString().length, a.sizeInBytes += a.line.toString().length, a
                    }
                    return __extends(n, t), n.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/, n.baseSize = 58, n
                }(AI.StackFrame);
            t._StackFrame = o
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    ! function(e) {
        e[e.Measurement = 0] = "Measurement", e[e.Aggregation = 1] = "Aggregation"
    }(e.DataPointType || (e.DataPointType = {}))
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function() {
        return function() {
            this.kind = e.DataPointType.Measurement
        }
    }();
    e.DataPoint = t
}(AI || (AI = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.metrics = [], t.properties = {}, t
        }
        return __extends(t, e), t
    }(Microsoft.Telemetry.Domain);
    e.MetricData = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            ! function(t) {
                var n = function(t) {
                    function n() {
                        var n = null !== t && t.apply(this, arguments) || this;
                        return n.aiDataContract = {
                            name: e.FieldType.Required,
                            kind: e.FieldType.Default,
                            value: e.FieldType.Required,
                            count: e.FieldType.Default,
                            min: e.FieldType.Default,
                            max: e.FieldType.Default,
                            stdDev: e.FieldType.Default
                        }, n
                    }
                    return __extends(n, t), n
                }(AI.DataPoint);
                t.DataPoint = n
            }(t.Common || (t.Common = {}))
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        ! function(n) {
            var i = function(i) {
                function o(o, a, r, s, l, c) {
                    var u = i.call(this) || this;
                    u.aiDataContract = {
                        ver: t.FieldType.Required,
                        metrics: t.FieldType.Required,
                        properties: t.FieldType.Default
                    };
                    var g = new e.ApplicationInsights.Telemetry.Common.DataPoint;
                    return g.count = r > 0 ? r : undefined, g.max = isNaN(l) || null === l ? undefined : l, g.min = isNaN(s) || null === s ? undefined : s, g.name = n.Common.DataSanitizer.sanitizeString(o) || t.Util.NotSpecified, g.value = a, u.metrics = [g], u.properties = t.Telemetry.Common.DataSanitizer.sanitizeProperties(c), u
                }
                return __extends(o, i), o.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric", o.dataType = "MetricData", o
            }(AI.MetricData);
            n.Metric = i
        }(t.Telemetry || (t.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(n) {
                function i(i, o, a, r, s, l) {
                    var c = n.call(this) || this;
                    return c.aiDataContract = {
                        ver: e.FieldType.Required,
                        name: e.FieldType.Default,
                        url: e.FieldType.Default,
                        duration: e.FieldType.Default,
                        properties: e.FieldType.Default,
                        measurements: e.FieldType.Default,
                        id: e.FieldType.Default
                    }, c.id = t.Common.DataSanitizer.sanitizeId(l), c.url = t.Common.DataSanitizer.sanitizeUrl(o), c.name = t.Common.DataSanitizer.sanitizeString(i) || e.Util.NotSpecified, isNaN(a) || (c.duration = e.Util.msToTimeSpan(a)), c.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(r), c.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(s), c
                }
                return __extends(i, n), i.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview", i.dataType = "PageviewData", i
            }(AI.PageViewData);
            t.PageView = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var AI;
! function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.ver = 2, t.properties = {}, t.measurements = {}, t
        }
        return __extends(t, e), t
    }(e.PageViewData);
    e.PageViewPerfData = t
}(AI || (AI = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function(n) {
                function i(o, a, r, s, l) {
                    var c = n.call(this) || this;
                    c.aiDataContract = {
                        ver: e.FieldType.Required,
                        name: e.FieldType.Default,
                        url: e.FieldType.Default,
                        duration: e.FieldType.Default,
                        perfTotal: e.FieldType.Default,
                        networkConnect: e.FieldType.Default,
                        sentRequest: e.FieldType.Default,
                        receivedResponse: e.FieldType.Default,
                        domProcessing: e.FieldType.Default,
                        properties: e.FieldType.Default,
                        measurements: e.FieldType.Default
                    }, c.isValid = !1;
                    var u = i.getPerformanceTiming();
                    if (u) {
                        var g = i.getDuration(u.navigationStart, u.loadEventEnd),
                            p = i.getDuration(u.navigationStart, u.connectEnd),
                            d = i.getDuration(u.requestStart, u.responseStart),
                            f = i.getDuration(u.responseStart, u.responseEnd),
                            h = i.getDuration(u.responseEnd, u.loadEventEnd);
                        0 == g ? e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.ErrorPVCalc, "error calculating page view performance.", {
                            total: g,
                            network: p,
                            request: d,
                            response: f,
                            dom: h
                        }) : i.shouldCollectDuration(g, p, d, f, h) ? g < Math.floor(p) + Math.floor(d) + Math.floor(f) + Math.floor(h) ? e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.ClientPerformanceMathError, "client performance math error.", {
                            total: g,
                            network: p,
                            request: d,
                            response: f,
                            dom: h
                        }) : (c.durationMs = g, c.perfTotal = c.duration = e.Util.msToTimeSpan(g), c.networkConnect = e.Util.msToTimeSpan(p), c.sentRequest = e.Util.msToTimeSpan(d), c.receivedResponse = e.Util.msToTimeSpan(f), c.domProcessing = e.Util.msToTimeSpan(h), c.isValid = !0) : e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.InvalidDurationValue, "Invalid page load duration value. Browser perf data won't be sent.", {
                            total: g,
                            network: p,
                            request: d,
                            response: f,
                            dom: h
                        })
                    }
                    return c.url = t.Common.DataSanitizer.sanitizeUrl(a), c.name = t.Common.DataSanitizer.sanitizeString(o) || e.Util.NotSpecified, c.properties = e.Telemetry.Common.DataSanitizer.sanitizeProperties(s), c.measurements = e.Telemetry.Common.DataSanitizer.sanitizeMeasurements(l), c
                }
                return __extends(i, n), i.prototype.getIsValid = function() {
                    return this.isValid
                }, i.prototype.getDurationMs = function() {
                    return this.durationMs
                }, i.getPerformanceTiming = function() {
                    return i.isPerformanceTimingSupported() ? window.performance.timing : null
                }, i.isPerformanceTimingSupported = function() {
                    return "undefined" != typeof window && window.performance && window.performance.timing
                }, i.isPerformanceTimingDataReady = function() {
                    var e = window.performance.timing;
                    return e.domainLookupStart > 0 && e.navigationStart > 0 && e.responseStart > 0 && e.requestStart > 0 && e.loadEventEnd > 0 && e.responseEnd > 0 && e.connectEnd > 0 && e.domLoading > 0
                }, i.getDuration = function(e, t) {
                    var n = undefined;
                    return isNaN(e) || isNaN(t) || (n = Math.max(t - e, 0)), n
                }, i.shouldCollectDuration = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"],
                        o = navigator.userAgent,
                        a = !1;
                    if (o)
                        for (var r = 0; r < n.length; r++) a = a || -1 !== o.toLowerCase().indexOf(n[r]);
                    if (a) return !1;
                    for (var s = 0; s < e.length; s++)
                        if (e[s] >= i.MAX_DURATION_ALLOWED) return !1;
                    return !0
                }, i.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance", i.dataType = "PageviewPerformanceData", i.MAX_DURATION_ALLOWED = 36e5, i
            }(AI.PageViewPerfData);
            t.PageViewPerformance = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        var n = function() {
            function n(e) {
                var n = this;
                this._config = e, this._sender = new t.Sender(e), this.appId = function() {
                    return n._sender._appId
                }, e.appId() && (this._sender._appId = e.appId()), this.telemetryInitializers = [], "undefined" != typeof window && (this._sessionManager = new t.Context._SessionManager(e), this.application = new t.Context.Application, this.device = new t.Context.Device, this.internal = new t.Context.Internal(e), this.location = new t.Context.Location, this.user = new t.Context.User(e), this.operation = new t.Context.Operation, this.session = new t.Context.Session, this.sample = new t.Context.Sample(e.sampleRate())), this._addDefaultTelemetryInitializers()
            }
            return n.prototype.addTelemetryInitializer = function(e) {
                this.telemetryInitializers.push(e)
            }, n.prototype.track = function(e) {
                return e ? (e.name === t.Telemetry.PageView.envelopeType && t._InternalLogging.resetInternalMessageCount(), this.session && "string" != typeof this.session.id && this._sessionManager.update(), this._track(e)) : t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TrackArgumentsNotSpecified, "cannot call .track() with a null or undefined argument", null, !0), e
            }, n.prototype._addDefaultTelemetryInitializers = function() {
                if (!this._config.isBrowserLinkTrackingEnabled()) {
                    var t = ["/browserLinkSignalR/", "/__browserLink/"];
                    this.addTelemetryInitializer(function(n) {
                        if (n.name === e.ApplicationInsights.Telemetry.RemoteDependencyData.envelopeType) {
                            var i = n.data;
                            if (i && i.baseData)
                                for (var o = 0; o < t.length; o++)
                                    if (i.baseData.name.indexOf(t[o]) >= 0) return !1
                        }
                        return !0
                    })
                }
            }, n.prototype._track = function(e) {
                this.session && ("string" == typeof this.session.id ? this._applySessionContext(e, this.session) : this._applySessionContext(e, this._sessionManager.automaticSession)), this._applyApplicationContext(e, this.application), this._applyDeviceContext(e, this.device), this._applyInternalContext(e, this.internal), this._applyLocationContext(e, this.location), this._applySampleContext(e, this.sample), this._applyUserContext(e, this.user), this._applyOperationContext(e, this.operation), e.iKey = this._config.instrumentationKey();
                var n = !1;
                try {
                    for (var i = this.telemetryInitializers.length, o = 0; o < i; ++o) {
                        var a = this.telemetryInitializers[o];
                        if (a && !1 === a.apply(null, [e])) {
                            n = !0;
                            break
                        }
                    }
                } catch (s) {
                    n = !0, t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TelemetryInitializerFailed, "One of telemetry initializers failed, telemetry item will not be sent: " + t.Util.getExceptionName(s), {
                        exception: t.Util.dump(s)
                    }, !0)
                }
                if (!n)
                    if (e.name === t.Telemetry.Metric.envelopeType || this.sample.isSampledIn(e)) {
                        var r = this._config.instrumentationKey().replace(/-/g, "");
                        e.name = e.name.replace("{0}", r), this._sender.send(e)
                    } else t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.TelemetrySampledAndNotSent, "Telemetry is sampled and not sent to the AI service.", {
                        SampleRate: this.sample.sampleRate
                    }, !0);
                return e
            }, n.prototype._applyApplicationContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.ver && (e.tags[n.applicationVersion] = t.ver), "string" == typeof t.build && (e.tags[n.applicationBuild] = t.build)
                }
            }, n.prototype._applyDeviceContext = function(e, t) {
                var n = new AI.ContextTagKeys;
                t && ("string" == typeof t.id && (e.tags[n.deviceId] = t.id), "string" == typeof t.ip && (e.tags[n.deviceIp] = t.ip), "string" == typeof t.language && (e.tags[n.deviceLanguage] = t.language), "string" == typeof t.locale && (e.tags[n.deviceLocale] = t.locale), "string" == typeof t.model && (e.tags[n.deviceModel] = t.model), "undefined" != typeof t.network && (e.tags[n.deviceNetwork] = t.network), "string" == typeof t.oemName && (e.tags[n.deviceOEMName] = t.oemName), "string" == typeof t.os && (e.tags[n.deviceOS] = t.os), "string" == typeof t.osversion && (e.tags[n.deviceOSVersion] = t.osversion), "string" == typeof t.resolution && (e.tags[n.deviceScreenResolution] = t.resolution), "string" == typeof t.type && (e.tags[n.deviceType] = t.type))
            }, n.prototype._applyInternalContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.agentVersion && (e.tags[n.internalAgentVersion] = t.agentVersion), "string" == typeof t.sdkVersion && (e.tags[n.internalSdkVersion] = t.sdkVersion)
                }
            }, n.prototype._applyLocationContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.ip && (e.tags[n.locationIp] = t.ip)
                }
            }, n.prototype._applyOperationContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.id && (e.tags[n.operationId] = t.id), "string" == typeof t.name && (e.tags[n.operationName] = t.name), "string" == typeof t.parentId && (e.tags[n.operationParentId] = t.parentId), "string" == typeof t.rootId && (e.tags[n.operationRootId] = t.rootId), "string" == typeof t.syntheticSource && (e.tags[n.operationSyntheticSource] = t.syntheticSource)
                }
            }, n.prototype._applySampleContext = function(e, t) {
                t && (e.sampleRate = t.sampleRate)
            }, n.prototype._applySessionContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.id && (e.tags[n.sessionId] = t.id), "undefined" != typeof t.isFirst && (e.tags[n.sessionIsFirst] = t.isFirst)
                }
            }, n.prototype._applyUserContext = function(e, t) {
                if (t) {
                    var n = new AI.ContextTagKeys;
                    "string" == typeof t.accountId && (e.tags[n.userAccountId] = t.accountId), "string" == typeof t.agent && (e.tags[n.userAgent] = t.agent), "string" == typeof t.id && (e.tags[n.userId] = t.id), "string" == typeof t.authenticatedId && (e.tags[n.userAuthUserId] = t.authenticatedId), "string" == typeof t.storeRegion && (e.tags[n.userStoreRegion] = t.storeRegion)
                }
            }, n
        }();
        t.TelemetryContext = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        var n = function(e) {
            function t() {
                return e.call(this) || this
            }
            return __extends(t, e), t
        }(e.Telemetry.Base);
        t.Data = n
    }(e.Telemetry || (e.Telemetry = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        ! function(n) {
            ! function(n) {
                var i = function(e) {
                    function n(n, i) {
                        var o = e.call(this) || this;
                        return o.aiDataContract = {
                            baseType: t.FieldType.Required,
                            baseData: t.FieldType.Required
                        }, o.baseType = n, o.baseData = i, o
                    }
                    return __extends(n, e), n
                }(e.Telemetry.Data);
                n.Data = i
            }(n.Common || (n.Common = {}))
        }(t.Telemetry || (t.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                function n(e, t) {
                    this.pageViewPerformanceSent = !1, this.overridePageViewDuration = !1, this.overridePageViewDuration = t, this.appInsights = e
                }
                return n.prototype.trackPageView = function(n, i, o, a, r) {
                    var s = this;
                    "string" != typeof n && (n = window.document && window.document.title || ""), "string" != typeof i && (i = window.location && window.location.href || "");
                    var l = !1,
                        c = undefined;
                    if (t.PageViewPerformance.isPerformanceTimingSupported()) {
                        var u = t.PageViewPerformance.getPerformanceTiming().navigationStart;
                        c = t.PageViewPerformance.getDuration(u, +new Date), t.PageViewPerformance.shouldCollectDuration(c) || (c = undefined)
                    } else this.appInsights.sendPageViewInternal(n, i, isNaN(r) ? undefined : r, o, a), this.appInsights.flush(), l = !0;
                    l || !this.overridePageViewDuration && isNaN(r) || (this.appInsights.sendPageViewInternal(n, i, isNaN(r) ? c : r, o, a), this.appInsights.flush(), l = !0);
                    if (t.PageViewPerformance.isPerformanceTimingSupported()) var g = setInterval(function() {
                        try {
                            if (t.PageViewPerformance.isPerformanceTimingDataReady()) {
                                clearInterval(g);
                                var r = new t.PageViewPerformance(n, i, null, o, a);
                                r.getIsValid() || l ? (l || s.appInsights.sendPageViewInternal(n, i, r.getDurationMs(), o, a), s.pageViewPerformanceSent || (s.appInsights.sendPageViewPerformanceInternal(r), s.pageViewPerformanceSent = !0), s.appInsights.flush()) : (s.appInsights.sendPageViewInternal(n, i, c, o, a), s.appInsights.flush())
                            } else t.PageViewPerformance.getDuration(u, +new Date) > 6e4 && (clearInterval(g), l || (s.appInsights.sendPageViewInternal(n, i, 6e4, o, a), s.appInsights.flush()))
                        } catch (p) {
                            e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.TrackPVFailedCalc, "trackPageView failed on page load calculation: " + e.Util.getExceptionName(p), {
                                exception: e.Util.dump(p)
                            })
                        }
                    }, 100);
                    else e._InternalLogging.throwInternal(e.LoggingSeverity.WARNING, e._InternalMessageId.NavigationTimingNotSupported, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.")
                }, n
            }();
            t.PageViewManager = n
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        ! function(t) {
            var n = function() {
                function t(e) {
                    this.prevPageVisitDataKeyName = "prevPageVisitData", this.pageVisitTimeTrackingHandler = e
                }
                return t.prototype.trackPreviousPageVisit = function(t, n) {
                    try {
                        var i = this.restartPageVisitTimer(t, n);
                        i && this.pageVisitTimeTrackingHandler(i.pageName, i.pageUrl, i.pageVisitTime)
                    } catch (o) {
                        e._InternalLogging.warnToConsole("Auto track page visit time failed, metric will not be collected: " + e.Util.dump(o))
                    }
                }, t.prototype.restartPageVisitTimer = function(t, n) {
                    try {
                        var i = this.stopPageVisitTimer();
                        return this.startPageVisitTimer(t, n), i
                    } catch (o) {
                        return e._InternalLogging.warnToConsole("Call to restart failed: " + e.Util.dump(o)), null
                    }
                }, t.prototype.startPageVisitTimer = function(t, n) {
                    try {
                        if (e.Util.canUseSessionStorage()) {
                            if (null != e.Util.getSessionStorage(this.prevPageVisitDataKeyName)) throw new Error("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                            var o = new i(t, n),
                                a = JSON.stringify(o);
                            e.Util.setSessionStorage(this.prevPageVisitDataKeyName, a)
                        }
                    } catch (r) {
                        e._InternalLogging.warnToConsole("Call to start failed: " + e.Util.dump(r))
                    }
                }, t.prototype.stopPageVisitTimer = function() {
                    try {
                        if (e.Util.canUseSessionStorage()) {
                            var t = Date.now(),
                                n = e.Util.getSessionStorage(this.prevPageVisitDataKeyName);
                            if (n) {
                                var i = JSON.parse(n);
                                return i.pageVisitTime = t - i.pageVisitStartTime, e.Util.removeSessionStorage(this.prevPageVisitDataKeyName), i
                            }
                            return null
                        }
                        return null
                    } catch (o) {
                        return e._InternalLogging.warnToConsole("Stop page visit timer failed: " + e.Util.dump(o)), null
                    }
                }, t
            }();
            t.PageVisitTimeManager = n;
            var i = function() {
                return function(e, t) {
                    this.pageVisitStartTime = Date.now(), this.pageName = e, this.pageUrl = t
                }
            }();
            t.PageVisitData = i
        }(e.Telemetry || (e.Telemetry = {}))
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function t() {
                this.hashCodeGeneragor = new e.HashCodeScoreGenerator
            }
            return t.prototype.isEnabled = function(e, t) {
                return this.hashCodeGeneragor.getHashCodeScore(e) < t
            }, t
        }();
        e.SplitTest = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        t.Version = "1.0.20";
        var n = function() {
            function n(o) {
                var a = this;
                this._trackAjaxAttempts = 0, this.config = o || {};
                var r = n.defaultConfig;
                if (r !== undefined)
                    for (var s in r) this.config[s] === undefined && (this.config[s] = r[s]);
                t._InternalLogging.verboseLogging = function() {
                    return a.config.verboseLogging
                }, t._InternalLogging.enableDebugExceptions = function() {
                    return a.config.enableDebug
                };
                var l = {
                    instrumentationKey: function() {
                        return a.config.instrumentationKey
                    },
                    accountId: function() {
                        return a.config.accountId
                    },
                    sessionRenewalMs: function() {
                        return a.config.sessionRenewalMs
                    },
                    sessionExpirationMs: function() {
                        return a.config.sessionExpirationMs
                    },
                    endpointUrl: function() {
                        return a.config.endpointUrl
                    },
                    emitLineDelimitedJson: function() {
                        return a.config.emitLineDelimitedJson
                    },
                    maxBatchSizeInBytes: function() {
                        return !a.config.isBeaconApiDisabled && t.Util.IsBeaconApiSupported() ? Math.min(a.config.maxBatchSizeInBytes, t.Sender.MaxBeaconPayloadSize) : a.config.maxBatchSizeInBytes
                    },
                    maxBatchInterval: function() {
                        return a.config.maxBatchInterval
                    },
                    disableTelemetry: function() {
                        return a.config.disableTelemetry
                    },
                    sampleRate: function() {
                        return a.config.samplingPercentage
                    },
                    cookieDomain: function() {
                        return a.config.cookieDomain
                    },
                    enableSessionStorageBuffer: function() {
                        return (a.config.isBeaconApiDisabled || !t.Util.IsBeaconApiSupported()) && a.config.enableSessionStorageBuffer
                    },
                    isRetryDisabled: function() {
                        return a.config.isRetryDisabled
                    },
                    isBeaconApiDisabled: function() {
                        return a.config.isBeaconApiDisabled
                    },
                    sdkExtension: function() {
                        return a.config.sdkExtension
                    },
                    isBrowserLinkTrackingEnabled: function() {
                        return a.config.isBrowserLinkTrackingEnabled
                    },
                    appId: function() {
                        return a.config.appId
                    }
                };
                this.config.isCookieUseDisabled && t.Util.disableCookies(), this.config.isStorageUseDisabled && t.Util.disableStorage(), this.context = new t.TelemetryContext(l), this._pageViewManager = new e.ApplicationInsights.Telemetry.PageViewManager(this, this.config.overridePageViewDuration), this._eventTracking = new i("trackEvent"), this._eventTracking.action = function(e, n, i, o, r) {
                    r ? isNaN(r.duration) && (r.duration = i) : r = {
                        duration: i
                    };
                    var s = new t.Telemetry.Event(e, o, r),
                        l = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, s),
                        c = new t.Telemetry.Common.Envelope(l, t.Telemetry.Event.envelopeType);
                    a.context.track(c)
                }, this._pageTracking = new i("trackPageView"), this._pageTracking.action = function(e, t, n, i, o) {
                    a.sendPageViewInternal(e, t, n, i, o)
                }, this._pageVisitTimeManager = new t.Telemetry.PageVisitTimeManager(function(e, t, n) {
                    return a.trackPageVisitTime(e, t, n)
                }), this.config.disableAjaxTracking || (this._ajaxMonitor = new e.ApplicationInsights.AjaxMonitor(this))
            }
            return n.prototype.sendPageViewInternal = function(e, n, i, o, a) {
                var r = new t.Telemetry.PageView(e, n, i, o, a, this.context.operation.id),
                    s = new t.Telemetry.Common.Data(t.Telemetry.PageView.dataType, r),
                    l = new t.Telemetry.Common.Envelope(s, t.Telemetry.PageView.envelopeType);
                this.context.track(l), this._trackAjaxAttempts = 0
            }, n.prototype.sendPageViewPerformanceInternal = function(e) {
                var n = new t.Telemetry.Common.Data(t.Telemetry.PageViewPerformance.dataType, e),
                    i = new t.Telemetry.Common.Envelope(n, t.Telemetry.PageViewPerformance.envelopeType);
                this.context.track(i)
            }, n.prototype.startTrackPage = function(e) {
                try {
                    "string" != typeof e && (e = window.document && window.document.title || ""), this._pageTracking.start(e)
                } catch (n) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.StartTrackFailed, "startTrackPage failed, page view may not be collected: " + t.Util.getExceptionName(n), {
                        exception: t.Util.dump(n)
                    })
                }
            }, n.prototype.stopTrackPage = function(e, n, i, o) {
                try {
                    "string" != typeof e && (e = window.document && window.document.title || ""), "string" != typeof n && (n = window.location && window.location.href || ""), this._pageTracking.stop(e, n, i, o), this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, n)
                } catch (a) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.StopTrackFailed, "stopTrackPage failed, page view will not be collected: " + t.Util.getExceptionName(a), {
                        exception: t.Util.dump(a)
                    })
                }
            }, n.prototype.trackPageView = function(e, n, i, o, a) {
                try {
                    this._pageViewManager.trackPageView(e, n, i, o, a), this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(e, n)
                } catch (r) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TrackPVFailed, "trackPageView failed, page view will not be collected: " + t.Util.getExceptionName(r), {
                        exception: t.Util.dump(r)
                    })
                }
            }, n.prototype.startTrackEvent = function(e) {
                try {
                    this._eventTracking.start(e)
                } catch (n) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.StartTrackEventFailed, "startTrackEvent failed, event will not be collected: " + t.Util.getExceptionName(n), {
                        exception: t.Util.dump(n)
                    })
                }
            }, n.prototype.stopTrackEvent = function(e, n, i) {
                try {
                    this._eventTracking.stop(e, undefined, n, i)
                } catch (o) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.StopTrackEventFailed, "stopTrackEvent failed, event will not be collected: " + t.Util.getExceptionName(o), {
                        exception: t.Util.dump(o)
                    })
                }
            }, n.prototype.trackEvent = function(e, n, i) {
                try {
                    var o = new t.Telemetry.Event(e, n, i),
                        a = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, o),
                        r = new t.Telemetry.Common.Envelope(a, t.Telemetry.Event.envelopeType);
                    this.context.track(r)
                } catch (s) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TrackEventFailed, "trackEvent failed, event will not be collected: " + t.Util.getExceptionName(s), {
                        exception: t.Util.dump(s)
                    })
                }
            }, n.prototype.trackDependency = function(e, n, i, o, a, r, s, l, c) {
                if (-1 === this.config.maxAjaxCallsPerView || this._trackAjaxAttempts < this.config.maxAjaxCallsPerView) {
                    var u = new t.Telemetry.RemoteDependencyData(e, i, o, a, r, s, n, l, c),
                        g = new t.Telemetry.Common.Data(t.Telemetry.RemoteDependencyData.dataType, u),
                        p = new t.Telemetry.Common.Envelope(g, t.Telemetry.RemoteDependencyData.envelopeType);
                    this.context.track(p)
                } else this._trackAjaxAttempts === this.config.maxAjaxCallsPerView && t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.MaxAjaxPerPVExceeded, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.", !0);
                ++this._trackAjaxAttempts
            }, n.prototype.trackDependencyData = function(e) {
                if (-1 === this.config.maxAjaxCallsPerView || this._trackAjaxAttempts < this.config.maxAjaxCallsPerView) {
                    var n = new t.Telemetry.Common.Data(t.Telemetry.RemoteDependencyData.dataType, e),
                        i = new t.Telemetry.Common.Envelope(n, t.Telemetry.RemoteDependencyData.envelopeType);
                    this.context.track(i)
                } else this._trackAjaxAttempts === this.config.maxAjaxCallsPerView && t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.MaxAjaxPerPVExceeded, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.", !0);
                ++this._trackAjaxAttempts
            }, n.prototype.trackAjax = function(e, t, n, i, o, a, r) {
                this.trackDependency(e, null, t, n, i, o, a)
            }, n.prototype.trackException = function(e, n, i, o, a) {
                try {
                    if (!t.Util.isError(e)) try {
                        throw new Error(e)
                    } catch (c) {
                        e = c
                    }
                    var r = new t.Telemetry.Exception(e, i, o, a),
                        s = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, r),
                        l = new t.Telemetry.Common.Envelope(s, t.Telemetry.Exception.envelopeType);
                    this.context.track(l)
                } catch (u) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TrackExceptionFailed, "trackException failed, exception will not be collected: " + t.Util.getExceptionName(u), {
                        exception: t.Util.dump(u)
                    })
                }
            }, n.prototype.trackMetric = function(e, n, i, o, a, r) {
                try {
                    var s = new t.Telemetry.Metric(e, n, i, o, a, r),
                        l = new t.Telemetry.Common.Data(t.Telemetry.Metric.dataType, s),
                        c = new t.Telemetry.Common.Envelope(l, t.Telemetry.Metric.envelopeType);
                    this.context.track(c)
                } catch (u) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.TrackMetricFailed, "trackMetric failed, metric will not be collected: " + t.Util.getExceptionName(u), {
                        exception: t.Util.dump(u)
                    })
                }
            }, n.prototype.trackTrace = function(e, n, i) {
                try {
                    var o = new t.Telemetry.Trace(e, n, i),
                        a = new t.Telemetry.Common.Data(t.Telemetry.Trace.dataType, o),
                        r = new t.Telemetry.Common.Envelope(a, t.Telemetry.Trace.envelopeType);
                    this.context.track(r)
                } catch (s) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.TrackTraceFailed, "trackTrace failed, trace will not be collected: " + t.Util.getExceptionName(s), {
                        exception: t.Util.dump(s)
                    })
                }
            }, n.prototype.trackPageVisitTime = function(e, t, n) {
                var i = {
                    PageName: e,
                    PageUrl: t
                };
                this.trackMetric("PageVisitTime", n, 1, n, n, i)
            }, n.prototype.flush = function(e) {
                void 0 === e && (e = !0);
                try {
                    this.context._sender.triggerSend(e)
                } catch (n) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.FlushFailed, "flush failed, telemetry will not be collected: " + t.Util.getExceptionName(n), {
                        exception: t.Util.dump(n)
                    })
                }
            }, n.prototype.setAuthenticatedUserContext = function(e, n, i) {
                void 0 === i && (i = !1);
                try {
                    this.context.user.setAuthenticatedUserContext(e, n, i)
                } catch (o) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.SetAuthContextFailed, "Setting auth user context failed. " + t.Util.getExceptionName(o), {
                        exception: t.Util.dump(o)
                    }, !0)
                }
            }, n.prototype.clearAuthenticatedUserContext = function() {
                try {
                    this.context.user.clearAuthenticatedUserContext()
                } catch (e) {
                    t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.SetAuthContextFailed, "Clearing auth user context failed. " + t.Util.getExceptionName(e), {
                        exception: t.Util.dump(e)
                    }, !0)
                }
            }, n.prototype.SendCORSException = function(n) {
                var i = e.ApplicationInsights.Telemetry.Exception.CreateSimpleException("Script error.", "Error", "unknown", "unknown", "The browser's same-origin policy prevents us from getting the details of this exception. Consider using 'crossorigin' attribute.", 0);
                i.properties = n;
                var o = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, i),
                    a = new t.Telemetry.Common.Envelope(o, t.Telemetry.Exception.envelopeType);
                this.context.track(a)
            }, n.prototype._onerror = function(e, n, i, o, a) {
                try {
                    var r = {
                        url: n || document.URL
                    };
                    if (t.Util.isCrossOriginError(e, n, i, o, a)) this.SendCORSException(r);
                    else {
                        if (!t.Util.isError(a)) {
                            var s = "window.onerror@" + r.url + ":" + i + ":" + (o || 0);
                            (a = new Error(e)).stack = s
                        }
                        this.trackException(a, null, r)
                    }
                } catch (u) {
                    var l = a ? a.name + ", " + a.message : "null",
                        c = t.Util.dump(u);
                    t._InternalLogging.throwInternal(t.LoggingSeverity.CRITICAL, t._InternalMessageId.ExceptionWhileLoggingError, "_onerror threw exception while logging error, error will not be collected: " + t.Util.getExceptionName(u), {
                        exception: c,
                        errorString: l
                    })
                }
            }, n
        }();
        t.AppInsights = n;
        var i = function() {
            function e(e) {
                this._name = e, this._events = {}
            }
            return e.prototype.start = function(e) {
                "undefined" != typeof this._events[e] && t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.StartCalledMoreThanOnce, "start was called more than once for this event without calling stop.", {
                    name: this._name,
                    key: e
                }, !0), this._events[e] = +new Date
            }, e.prototype.stop = function(e, n, i, o) {
                var a = this._events[e];
                if (isNaN(a)) t._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.StopCalledWithoutStart, "stop was called without a corresponding start.", {
                    name: this._name,
                    key: e
                }, !0);
                else {
                    var r = +new Date,
                        s = t.Telemetry.PageViewPerformance.getDuration(a, r);
                    this.action(e, n, s, i, o)
                }
                delete this._events[e], this._events[e] = undefined
            }, e
        }()
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            function t() {}
            return t.reset = function() {
                t.isEnabled() && (e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, "0"), e.Util.setSessionStorage(t.ISSUES_REPORTED_KEY, "0"), t.itemsRestoredFromSessionBuffer = 0)
            }, t.isEnabled = function() {
                return t.enabled && null != t.appInsights && t.appInsights.context._sender._XMLHttpRequestSupported && e.Util.canUseSessionStorage()
            }, t.getIssuesReported = function() {
                return !t.isEnabled() || isNaN(+e.Util.getSessionStorage(t.ISSUES_REPORTED_KEY)) ? 0 : +e.Util.getSessionStorage(t.ISSUES_REPORTED_KEY)
            }, t.incrementItemsQueued = function() {
                try {
                    if (t.isEnabled()) {
                        var n = t.getNumberOfLostItems();
                        ++n, e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, n.toString())
                    }
                } catch (i) {}
            }, t.decrementItemsQueued = function(n) {
                try {
                    if (t.isEnabled()) {
                        var i = t.getNumberOfLostItems();
                        (i -= n) < 0 && (i = 0), e.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, i.toString())
                    }
                } catch (o) {}
            }, t.getNumberOfLostItems = function() {
                var n = 0;
                try {
                    t.isEnabled() && (n = isNaN(+e.Util.getSessionStorage(t.ITEMS_QUEUED_KEY)) ? 0 : +e.Util.getSessionStorage(t.ITEMS_QUEUED_KEY))
                } catch (i) {
                    n = 0
                }
                return n
            }, t.reportLostItems = function() {
                try {
                    if (t.isEnabled() && t.getIssuesReported() < t.LIMIT_PER_SESSION && t.getNumberOfLostItems() > 0) {
                        var n = t.getNumberOfLostItems() - t.itemsRestoredFromSessionBuffer;
                        t.appInsights.trackTrace('AI (Internal): Internal report DATALOSS:"' + n + '"', null), t.appInsights.flush();
                        var i = t.getIssuesReported();
                        ++i, e.Util.setSessionStorage(t.ISSUES_REPORTED_KEY, i.toString())
                    }
                } catch (o) {
                    e._InternalLogging.throwInternal(e.LoggingSeverity.CRITICAL, e._InternalMessageId.FailedToReportDataLoss, "Failed to report data loss: " + e.Util.getExceptionName(o), {
                        exception: e.Util.dump(o)
                    })
                } finally {
                    try {
                        t.reset()
                    } catch (o) {}
                }
            }, t.enabled = !1, t.itemsRestoredFromSessionBuffer = 0, t.LIMIT_PER_SESSION = 10, t.ITEMS_QUEUED_KEY = "AI_itemsQueued", t.ISSUES_REPORTED_KEY = "AI_lossIssuesReported", t
        }();
        e.DataLossAnalyzer = t
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        var n = function() {
            function n(t) {
                t.queue = t.queue || [];
                var i = t.config || {};
                if (i && !i.instrumentationKey)
                    if ((i = t).iKey) e.ApplicationInsights.Version = "0.10.0.0", i.instrumentationKey = i.iKey;
                    else {
                        if (!i.applicationInsightsId) throw new Error("Cannot load Application Insights SDK, no instrumentationKey was provided.");
                        e.ApplicationInsights.Version = "0.7.2.0", i.instrumentationKey = i.applicationInsightsId
                    } i = n.getDefaultConfig(i), this.snippet = t, this.config = i
            }
            return n.prototype.loadAppInsights = function() {
                var t = new e.ApplicationInsights.AppInsights(this.config);
                if (this.config.iKey) {
                    var n = t.trackPageView;
                    t.trackPageView = function(e, i, o) {
                        n.apply(t, [null, e, i, o])
                    }
                }
                "function" == typeof this.snippet.logPageView && (t.logPageView = function(e, n, i) {
                    t.trackPageView(null, e, n, i)
                });
                return "function" == typeof this.snippet.logEvent && (t.logEvent = function(e, n, i) {
                    t.trackEvent(e, n, i)
                }), t
            }, n.prototype.emptyQueue = function() {
                try {
                    if (e.ApplicationInsights.Util.isArray(this.snippet.queue)) {
                        for (var n = this.snippet.queue.length, i = 0; i < n; i++)(0, this.snippet.queue[i])();
                        this.snippet.queue = undefined, delete this.snippet.queue
                    }
                } catch (a) {
                    var o = {};
                    a && "function" == typeof a.toString && (o.exception = a.toString()), e.ApplicationInsights._InternalLogging.throwInternal(t.LoggingSeverity.WARNING, t._InternalMessageId.FailedToSendQueuedTelemetry, "Failed to send queued telemetry", o)
                }
            }, n.prototype.pollInteralLogs = function(t) {
                return setInterval(function() {
                    for (var n = e.ApplicationInsights._InternalLogging.queue, i = n.length, o = 0; o < i; o++) t.trackTrace(n[o].message);
                    n.length = 0
                }, this.config.diagnosticLogInterval)
            }, n.prototype.addHousekeepingBeforeUnload = function(t) {
                if (!t.config.disableFlushOnBeforeUnload && "onbeforeunload" in window) {
                    e.ApplicationInsights.Util.addEventHandler("beforeunload", function() {
                        t.context._sender.triggerSend(), t.context._sessionManager.backup()
                    }) || e.ApplicationInsights._InternalLogging.throwInternal(e.ApplicationInsights.LoggingSeverity.CRITICAL, e.ApplicationInsights._InternalMessageId.FailedToAddHandlerForOnBeforeUnload, "Could not add handler for beforeunload")
                }
            }, n.getDefaultConfig = function(e) {
                return e || (e = {}), e.endpointUrl = e.endpointUrl || "https://dc.services.visualstudio.com/v2/track", e.sessionRenewalMs = 18e5, e.sessionExpirationMs = 864e5, e.maxBatchSizeInBytes = e.maxBatchSizeInBytes > 0 ? e.maxBatchSizeInBytes : 102400, e.maxBatchInterval = isNaN(e.maxBatchInterval) ? 15e3 : e.maxBatchInterval, e.enableDebug = t.Util.stringToBoolOrDefault(e.enableDebug), e.disableExceptionTracking = t.Util.stringToBoolOrDefault(e.disableExceptionTracking), e.disableTelemetry = t.Util.stringToBoolOrDefault(e.disableTelemetry), e.verboseLogging = t.Util.stringToBoolOrDefault(e.verboseLogging), e.emitLineDelimitedJson = t.Util.stringToBoolOrDefault(e.emitLineDelimitedJson), e.diagnosticLogInterval = e.diagnosticLogInterval || 1e4, e.autoTrackPageVisitTime = t.Util.stringToBoolOrDefault(e.autoTrackPageVisitTime), (isNaN(e.samplingPercentage) || e.samplingPercentage <= 0 || e.samplingPercentage >= 100) && (e.samplingPercentage = 100), e.disableAjaxTracking = t.Util.stringToBoolOrDefault(e.disableAjaxTracking), e.maxAjaxCallsPerView = isNaN(e.maxAjaxCallsPerView) ? 500 : e.maxAjaxCallsPerView, e.isBeaconApiDisabled = t.Util.stringToBoolOrDefault(e.isBeaconApiDisabled, !0), e.disableCorrelationHeaders = t.Util.stringToBoolOrDefault(e.disableCorrelationHeaders), e.correlationHeaderExcludedDomains = e.correlationHeaderExcludedDomains || ["*.blob.core.windows.net", "*.blob.core.chinacloudapi.cn", "*.blob.core.cloudapi.de", "*.blob.core.usgovcloudapi.net"], e.disableFlushOnBeforeUnload = t.Util.stringToBoolOrDefault(e.disableFlushOnBeforeUnload), e.enableSessionStorageBuffer = t.Util.stringToBoolOrDefault(e.enableSessionStorageBuffer, !0), e.isRetryDisabled = t.Util.stringToBoolOrDefault(e.isRetryDisabled), e.isCookieUseDisabled = t.Util.stringToBoolOrDefault(e.isCookieUseDisabled), e.isStorageUseDisabled = t.Util.stringToBoolOrDefault(e.isStorageUseDisabled), e.isBrowserLinkTrackingEnabled = t.Util.stringToBoolOrDefault(e.isBrowserLinkTrackingEnabled), e.enableCorsCorrelation = t.Util.stringToBoolOrDefault(e.enableCorsCorrelation), e
            }, n
        }();
        t.Initialization = n
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(t) {
        try {
            if ("undefined" != typeof window && "undefined" != typeof JSON) {
                if (window.appInsights === undefined) e.ApplicationInsights.AppInsights.defaultConfig = e.ApplicationInsights.Initialization.getDefaultConfig();
                else {
                    var n = window.appInsights || {},
                        i = new e.ApplicationInsights.Initialization(n),
                        o = i.loadAppInsights();
                    for (var a in o) n[a] = o[a];
                    i.emptyQueue(), i.pollInteralLogs(o), i.addHousekeepingBeforeUnload(o)
                }
            }
        } catch (r) {
            e.ApplicationInsights._InternalLogging.warnToConsole("Failed to initialize AppInsights JS SDK: " + r.message)
        }
    }(e.ApplicationInsights || (e.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {}));
//# sourceMappingURL=ai.0.js.map