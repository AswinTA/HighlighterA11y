/*
  @author AswinTA
 */
var fina11yErrorDomElement = '<div id="fina11y-error-highlighting-main-div" class="tota11y tota11y-annotation-contrast tota11y-label tota11y-label-error"> <span class="tota11y-label-error-icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851 c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356 C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904 c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521 c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18 c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019 c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"> </path> </svg> </span> <span class="tota11y-label-content"><div class="tota11y-label-text">Error</div><div class="tota11y-label-help"> (<a class="tota11y-label-link" href="#">?</a>)</div><div class="tota11y-label-detail"> <span class="fina11y-annotation-error-name-db">This contrast is insufficient at this size.</span> <textarea id="tota11y-error-suggest-txtarea" class="tota11y-error-suggest-txtarea" name="" id="" cols="30" rows="10" placeholder="Enter suggestion Here......" style=" background-color: #a8a8a8 !important;padding: 5px 5px 5px 5px !important; margin-top: 5px !important;"></textarea> <hr> <br><button id="fina11y-error-submit-btn" class="fina11y-bot fina11y-bot-red">submit</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Replace Code</button></div></span></div>';
var fina11yErrorHighlightingElementAll = '<div id="fina11y-error-highlighting-main-div" class="fina11y-error-highlighting-main-div tota11y tota11y-annotation-contrast tota11y-label tota11y-label-error"> <span class="tota11y-label-error-icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851 c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356 C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904 c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521 c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18 c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019 c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"> </path> </svg> </span> <span class="tota11y-label-content"> <div class="tota11y-label-text">Error</div></span> </div>';
var fina11yParentLiElement;
var prevErrorCount = 0;
var $ = jQuery;
var elementHasAnyClass = false;
//****************  IP CONFIG ***************
var socketIP = "https://localhost:7444";
var javaDataFetchIP = "https://a11y.works/javaGet/";
// var javaDataFetchIP = "http://192.168.35.31:8005/aitoolfilter?url=https://scikit-learn.org/stable/&aicate=Link%20purpose"


var pyDataFetchIP = "https://a11y.works/pyPost/";
//****************  IP CONFIG ***************

// to store the current error element after finding in the webpage for furthur use
var errorElementForReplace;
var currentElement;

// socket init
// connecting to ip address
var socket = io.connect(socketIP);
// initializing socket connecton
socket.on('connect', function () {
    // sending a messege to the socket server
    socket.emit("test", "tota11y connected");
    console.log("-socket connection established-");
    // receiving messege from the server which is sent by the socket.send()
    socket.on('message', function (data) {
        // console.log('value = ' + data);
    });
    // receiving messege from the server which is sent by the emit()
    socket.on('testEmit', function (subCategory) {

        if (subCategory !== "") {


            console.log('data from socket : ' + subCategory)
            // enabling the error count and text if it is disabled.
            $('.tota11y-info-tab-anchor-text').parent().css('display', 'block');
            $('.tota11y-info-tab-anchor-text').html("Error : ");
            // removing all the contents from tota11y body
            $('.tota11y-info-errors').empty();
            // to remove if any add manual error div is present
            document.querySelectorAll('#fina11y-add-manual-errors').forEach(function (element) {
                element.remove();
            });
            // to remove previously generated accordions
            document.querySelectorAll('.accordion.js-accordion').forEach(function (element) {
                element.remove();
            });
            var accordion = $.parseHTML(' <div class="accordion js-accordion"></div>');
            var accordionMainWrapper = $.parseHTML('<div class="accordion__item js-accordion-item active"><div class="accordion-header js-accordion-header" id="fina11y-error-category-id-8">Error List</div><div class="accordion-body js-accordion-body" style="display: block;"><div class="accordion-body__contents"></div><div class="accordion js-accordion"></div></div></div>');
            // getting the current url 
            let currentUrl = window.location.href;
            // let currentUrl = "https://www.typescriptlang.org/";
            // ajax call to fetch the data
            let subCategory1 = subCategory;
            subCategory = "";
            $.ajax({
                type: "GET", //rest Type
                url: "https://a11y.works/javaGet/aitoolfilter?url=" + currentUrl + "&aicate=" + subCategory1,
                // url : "http://192.168.35.31:8005/aitoolfilter?url="+ currentUrl +"&aicate="+ subCategory1,
                // url: "http://localhost:8878/getData/" + "www.typescriptlang.com",
                // url: "http://35.188.66.232:8005/aitoolfilter?url="+currentUrl+"&aicate="+subCategory,
                contentType: "application/json; charset=utf-8",
                success: function (response) {

                    $('.tota11y-info-errors').empty();
                    var errorCount = 0;
                    $.each(response, function (index, errorObj) {
                        var accordionSubPanel = $.parseHTML('<div class="accordion__item js-accordion-item active" id="fina11y-error-code-snippet-id-36"><div class="accordion-header js-accordion-header" id="fina11y-sub-category-error-id-36">sub panel title</div><div class="accordion-body js-accordion-body" style="display: none; height: 103px; padding-top: 10px; margin-top: 0px; padding-bottom: 10px; margin-bottom: 0px;"><div class="accordion-body__contents"><div class="fina11y-code-editor"><div> <label class="tota11y-error-label">SC :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ST :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ERROR CODE :</label> <pre class="fina11y-error-src-code"></pre></div> <label>Error FIX</label><pre class="language-markup fina11y-error-code-snippet" contenteditable="true" id="fina11y-error-code-id-36"> prblm source code here</pre><label> Remarks </label><pre class="language-markup fina11y-error-remedy-box" contenteditable="true" id="fina11y-error-remarks-id-36"> enter your remarks here</pre><button id="fina11y-error-submit-btn" class="fina11y-bot fina11y-bot-red" >submit</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Replace Code</button></div></div></div></div>');
                        $(accordionSubPanel).attr("id", "fina11y-error-code-snippet-id-" + errorObj.id + "-" + errorObj.toolname);
                        $(accordionSubPanel).find("#fina11y-sub-category-error-id-36").attr("id", "fina11y-sub-category-error-id-" + errorObj.id + "-" + errorObj.toolname);
                        $(accordionSubPanel).find("pre[id=fina11y-error-code-id-36]").attr("id", "fina11y-error-code-id-" + errorObj.id + "-" + errorObj.toolname);
                        $(accordionSubPanel).find("pre[id=fina11y-error-remarks-id-36]").attr("id", "fina11y-error-remarks-id-" + errorObj.id + "-" + errorObj.toolname);
                        $(accordionSubPanel).find("button[id=fina11y-error-submit-btn]").attr("id", "fina11y-error-submit-btn-" + errorObj.id + "-" + errorObj.toolname);
                        // adding toolname to the button 
                        $(accordionSubPanel).find("button[id=fina11y-error-submit-btn-" + errorObj.id + "-" + errorObj.toolname + "]").attr("data-toolname", errorObj.toolname);
                        $(accordionSubPanel).find("pre.fina11y-error-src-code").text(errorObj.prbmSrc);
                        $(accordionSubPanel).find(".fina11y-error-code-snippet").text(errorObj.prbmSrc);
                        // $(accordionSubPanel).find("pre.fina11y-error-src-code").text(errorObj.problemSource);
                        // $(accordionSubPanel).find(".fina11y-error-code-snippet").text(errorObj.problemSource);
                        $(accordionSubPanel).find(".accordion-header").html(errorObj.testCase);
                        $(accordionMainWrapper).find(".accordion.js-accordion").append(accordionSubPanel);
                        errorCount++;
                    });
                    $(accordion).append(accordionMainWrapper);
                    $(".tota11y-info-errors").append(accordion);
                    //appending error count text to the tools main body.
                    $(".tota11y-info-error-count").text(errorCount);
                }
            });
        } else {

        }

    });
});
if (document.readyState === 'complete') {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    if (link.readyState) {
        link.onreadystatechange = function () {
            if (link.readyState == "loaded" || link.readyState == "complete") {
                link.onreadystatechange = null;
            }
        }
    } else {
        link.onload = function () { }
    }
    // link.href = "../a11yElementHighlighter/finallycss.css";
    link.className = "fina11y-script-ele";
    link.href = "https://cdn.jsdelivr.net/gh/AswinTA/HighlighterA11y@1.6.4/finallycss.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    if (!window.jQuery) {
        var jquery = document.createElement("script");
        jquery.type = "text/javascript";
        if (jquery.readyState) {
            jquery.onreadystatechange = function () {
                if (jquery.readyState == "loaded" || jquery.readyState == "complete") {
                    jquery.onreadystatechange = null;
                    createfina11yBody();
                }
            }
        } else {
            jquery.onload = function () {
                createfina11yBody();
            }
        }
        var jQueryScript = document.createElement('script');
        jQueryScript.className = "fina11y-script-ele";
        jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
        document.head.appendChild(jQueryScript);
    } else
        createfina11yBody();
}

// To Generate Tool body
function createfina11yBody() {
    // $.noConflict();
    $('body').append(' <div class="tota11y tota11y-info" id="moveable" tabindex="-1"> <header class="tota11y-info-title"> ---TEST--- <span class="tota11y-info-controls"><a aria-label="Close info panel" href="#" class="tota11y-info-dismiss-trigger">×</a></span><span class="fina11y-other-tools-text"><img style="width: 20px !important; margin-top: -13px !important;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AABaLUlEQVR42u3dd3Qc1f028OfO7GrVu7Sy3I17JzbBOEDAgIFQAgQMbwA7kEISwLgAoaQoJBAIxUASAiTBuNBM+4UAppsYE4eAwbhXcJUlW92SpW1z3z+MwYDL7mp3vzM7z+ccTnLIavXMRrv32Tt37gBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERJ2lpAMQ0df1mqkz24CBhoHSZP6e2ob6JB+JWYfmpjWo6t2R5F9ERDFiASCykcrHdakVxi0auBRAbrJ/X21dQyoOazeg5yAj49e4Kj/ZjYOIosQCQGQTFTN1L23iTQB9UvU7U1QA9lJ6I2CejKlFm1L3S4noYAzpAES0d8pfe/A8Ujj4p5xWR0BHnsP92icdhYhYAIhsocPA1dAYKZ0j+dSRCDVcKZ2CiFgAiORVaUMDU6RjpIzCVFRpfvYQCeObkEhYxRE4HgqV0jlSqBsKm46VDkHkdiwARMIs4ALpDKk/6MiF0hGI3I4FgEiY0jheOoPAUR8nnYDI7VgAiCQ9pL0A+kvHEDAQVTpDOgSRm7EAEAnyZ2EAADcOhF7kN/STDkHkZiwARLKGSgcQo1187EQ2wAJAJMu9g6By8bET2QALAJEs9w6CWrn32IlsgAWASNYw6QBiDMu9x05kAywAREL8s3UOgF7SOcRo1Rt31uRIxyByKxYAIiFKYwjc/R404PUMlg5B5FZu/vAhEqXdfP5/H4vrAIiksAAQSeEqeL4GRIJYAIjkcPDjXgBEYlgAiORwFTxfAyIxLABEAiof16UAKqRz2EAX3NVSKh2CyI1YAIgEWBFOfX/OiAyRjkDkRiwARDJYAPZREb4WRAJYAIgE8BLA/XAhIJEIFgAiGRz09lHcC4BIAgsAUapprbB3F0ACAI1h0FpJxyByGxYAohSrnIPuAAqlc9hIAe5p6CYdgshtWACIUszi9P/XGTwNQJRqLABEqcfB7qu4EJAo5VgAiFKPg91X8Z4ARCnHAkCUehzsvoozAEQpxwJAlErztKmBgdIx7EcP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Ma14m3QIIrdhASBKNaU0bw28H4XlUEpLxyByGxYAIhmc8t5Hc/qfSAILAJEAxQLwBS4AJBLBAkAkg4PePtrka0EkgAWASIBhsgB8zjK5HoJIAAsAkYDq76s6ADXSOWxgB67Nr5MOQeRGLABEcpZLB7ABvgZEQlgAiOTwNAAXABKJYQEgksL97/kaEAliASASwksBARjcA4BICgsAkRC9dzdASzqHIAuh8CrpEERuxQJAJKR2omoDsEk6hxilP8V1FW3SMYjcigWASJZ7V8FbhnuPncgGWACIZLn3HLji+X8iSSwARLLcOwjyCgAiUSwARLLcOwhyDwAiUSwARIJq27EWQFA6h4AQWorXS4cgcjMWACJJV6gQgHXSMQSsQZVyY/Ehsg0WACJhWmGhdAaBo35HOgGR27EAEAkzI3hKOkPKWcYT0hGI3I4FgEjYjk1YBGC7dI4U2obWov9IhyByOxYAImlVytLADOkYKaNxN6qUm7dAJrIFFgAiG8hvwp8V8JF0juRTH2J38QPSKYiIBYDIFjZMVgFEcB6AjdJZkkdtgKXO4+p/IntgASCyiZrL1CZvEN/UCg8A2C2dJ4FaAPVnBIxv4tqizdJhiGgvJR2AiL6u7/3a11KAAQooT+bvqW2oT+6BKGMnjKK1mKwCyf1FRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERElHr/HwpbQALMe3FBAAAAAElFTkSuQmCC"/></span><button id="fina11y-fix-and-replace" class="fina11y-bot fina11y-bot-red" style="float: right;" >Fix & Replace</button></header> <div id="moveableBody" class="tota11y-info-body"> <div class="tota11y-info-sections"> <div class="tota11y-info-section active"> <div id="fina11y-other-tools-id" class="fina11y-other-tools-menu"> <span> <span style="float: left;color: #d8d8d8 !important;font-weight: 600 !important;font-size: small !important;">Display all Carousel</span> <span style="float:left; margin-left: 15px !important;"> <div class="fina11y-onoff-toggle"><input type="checkbox" name="fina11y-onoff-toggle" class="fina11y-onoff-toggle-checkbox" id="myfina11y-onoff-toggle"><label class="fina11y-onoff-toggle-label" for="myfina11y-onoff-toggle"><span class="fina11y-onoff-toggle-inner"></span><span class="fina11y-onoff-toggle-switch"></span></label> </div></span> </span> </div><ul class="tota11y-info-errors"></ul> </div></div><ul role="tablist" class="tota11y-info-tabs"> <li class="tota11y-info-tab active"> <a class="tota11y-info-tab-anchor"> <span class="fina11y-options-footer"><button id="fina11y-add-error-btn" class="fina11y-bot fina11y-bot-red">Add Error</button><button id="fina11y-view-remedy-btn" class="fina11y-bot fina11y-bot-red">View Remedy</button></span> <span style="float:right;padding-top:5px !important" ;> <span class="tota11y-info-tab-anchor-text">Errors</span> <div class="tota11y-info-error-count">0</div></span> </a> </li></ul> </div></div> ');
    var a11yscript = document.createElement("script");
    a11yscript.type = "text/javascript";
    if (a11yscript.readyState) {
        a11yscript.onreadystatechange = function () {
            if (a11yscript.readyState == "loaded" || a11yscript.readyState == "complete") {
                a11yscript.onreadystatechange = null;
                dragElement(document.getElementById("moveable"));
                caller();
            }
        }
    } else {
        a11yscript.onload = function () {
            dragElement(document.getElementById("moveable"));
            caller();
        }
    }
    // a11yscript.src = "../a11yElementHighlighter/finallyUi.js";
    a11yscript.className = "fina11y-script-ele";
    a11yscript.src = "https://cdn.jsdelivr.net/gh/AswinTA/HighlighterA11y@1.6.4/finallyUi.js"
    document.getElementsByTagName("head")[0].appendChild(a11yscript);
    // fetch the error list from database using ajax 
    // setErrorListFromDb();
}
// To Create error highligting div on the top the error element
function createFina11yErrorHighlightingElement(currentElement, parentLiTag) {
    fina11yParentLiElement = null;
    fina11yParentLiElement = parentLiTag;
    if (currentElement.length > 0) {
        $.each(currentElement, function (index, element) {
            var errorIndicatorDom = $(document.createElement('div'));
            $(errorIndicatorDom).attr('id', 'fina11y-error-indication-transperent-div' + index);
            $(errorIndicatorDom).append(fina11yErrorDomElement);
            var position = $(element).offset();
            if (position.left > $(window).width()) {
                position.left = $(window).width();
            }
            //getting the id of error code to append it with error submit button
            var errorId = $(parentLiTag).find('code').attr('id').replace("fina11y-error-code-id-", "");
            // check for the error fix is already submitted or not
            if ($("[id^=fina11y-not-an-issue-btn]").prop('disabled') === true) {
            }
            // setting button id with errorId for the both error submission button and not and issue button.
            $(errorIndicatorDom).find("#fina11y-error-submit-btn").attr("id", "fina11y-error-submit-btn-" + errorId);
            $(errorIndicatorDom).find("#fina11y-not-an-issue-btn").attr("id", "fina11y-not-an-issue-btn-" + errorId);
            // append the dynamically created body to the current html body.
            $('body').append(errorIndicatorDom);
            // check for the element have any class
            if ($(element)[0].classList.length === 0) {
                elementHasAnyClass = false;
                $(element).addClass("tota11y-add-bg-boder");
                currentElement = $(element);
            } else {
                elementHasAnyClass = true;
                $(element).addClass("tota11y-add-bg-boder");
            }
            // setting the position of highlighting element over the error element
            $("#fina11y-error-indication-transperent-div" + index).offset({ top: position.top, left: position.left });
            // scroll to the top of the error element position.
            $(window).scrollTop($(currentElement).offset().top);
            // adding error name from the fina11y ui to the highlighter element
            $(".fina11y-annotation-error-name-db").text($(parentLiTag[0]).find("p.fina11y-db-error-name").text());
            // adding code from the ui to the highlighting element
            var ee = $("textarea.tota11y-error-suggest-txtarea").val($(parentLiTag[0]).find('code').text());
        });
    } else {
        var errorIndicatorDom = $(document.createElement('div'));
        $(errorIndicatorDom).attr('id', 'fina11y-error-indication-transperent-div');
        // $(fina11yErrorDomElement).find("textarea.tota11y-error-suggest-txtarea").val("sdfsdfsdfdsf");
        $(errorIndicatorDom).append(fina11yErrorDomElement);
        // getting the position of the current error element.
        var position = $(currentElement).offset();
        if (position.left > $(window).innerWidth()) {
            position.left = $(window).innerWidth() / 2;
        }
        //getting the id of error code to append it with error submit button
        var errorId = $(parentLiTag).find('code').attr('id').replace("fina11y-error-code-id-", "");
        $(errorIndicatorDom).find("#fina11y-error-submit-btn").attr("id", "fina11y-error-submit-btn-" + errorId);
        // getting the id of error and append it with notAnIssue button
        $(errorIndicatorDom).find("#fina11y-not-an-issue-btn").attr("id", "fina11y-not-an-issue-btn-" + errorId);
        //to append the element to the current html body
        $('body').append(errorIndicatorDom);
        // adding border to the current element for highlighting it.
        $(currentElement).addClass("tota11y-add-bg-boder");
        var highlighterWidth = $("#fina11y-error-indication-transperent-div").offsetWidth;
        // setting the position of highlighting element over the error element
        $("#fina11y-error-indication-transperent-div").offset({ top: position.top, left: position.left });
        // scroll to the top of the error element position.
        $(window).scrollTop(($(currentElement).offset().top));
        // adding error name from the fina11y ui to the highlighter element
        $(".fina11y-annotation-error-name-db").text($(parentLiTag[0]).find("p.fina11y-db-error-name").text());
        // adding code from the ui to the highlighting element
        var ee = $("#tota11y-error-suggest-txtarea").val($(parentLiTag[0]).find('code').text());
    }
}

// to extract the all attribute name and value pair from a given html element.
function extractAllAttributesAndValues(currentElement) {
    var attributeList = [];
    //iterate through each and every attribute in the given element
    $.each(currentElement[0].attributes, function (i, a) {
        attributeList[i] = a;
    });
    return attributeList;
}

// to get the html element by matching the all availible attribute name and value and innerHtml content. if attribute is not 
// present then match with the tagname and innerhtml.
function findElementByMatchingAttributes(attributeList, elementText, tagName) {
    elementText = elementText.trim();
    if (attributeList) {
        var attrNameAndValue = "";
        // to create a selector in the form ([ attr1 : value][attr2 : value]..) inorder to find the element based on attributes.
        $(attributeList).each(function (index, attr) {
            attrNameAndValue += '[' + attr.name + '="';
            attrNameAndValue += attr.value + '"]';
        });
        //finding the element with the all given attribute name and value.
        var fina11yFoundElement = $(attrNameAndValue);
        // if more than one element is present, then check the innerHtml of each element.
        var errorElement;
        if (fina11yFoundElement.length > 0) {
            $.each(fina11yFoundElement, function (index, elements) {
                if (elementText === "") {
                    if (elementText === "" && ($(elements).text()) === elementText) {
                        errorElement = elements;
                    }
                } else {
                    if (($(elements).text()).indexOf(elementText) >= 0) {
                        errorElement = elements;
                    }
                }
            });
        }
        return errorElement;
    } else {
        // if no attriubtes present , then find the element with containing the text.
        var elem = $(tagName + ":contains(" + elementText + ")");
        return elem;
    }
}

// to fetch the error list from database and append it on the main tool body
function setErrorListFromDb() {
    // to fetch the url of current page.
    var currentUrl = $(location).attr('href').replace("http://localhost/hosted/", "");
    var errorElementDom = $.parseHTML('<div class="accordion js-accordion"></div>');
    currentUrl = "https://" + currentUrl;
    var jsonData = new Object();
    jsonData.currentUrl = currentUrl;
    // ajax call to fetch error list from database.
    $.ajax({
        type: "GET", //rest Type
        url: "http://192.168.35.31:8005/distincthtmlcsobj?page=1&size=100",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var errorCount = 0;
            $.each(response.content, function (index, errorObj) {
                // error count for displaying it on the tool main body.
                errorCount += 1;
                // creating dynamic element that contains the error details and  appending it with the toolbody
                var accordionContent = $.parseHTML('<div class="accordion__item js-accordion-item"> <div class="accordion-header js-accordion-header">Panel 1</div><div class="accordion-body js-accordion-body"> <div class="accordion-body__contents">inside main panel 1</div><div class="accordion js-accordion"> </div></div></div>');
                var actest = $(accordionContent).find('.js-accordion-header');
                $(actest).html(errorObj.testCase);
                $(actest).attr('id', 'fina11y-error-category-id-' + errorObj.id)
                // appending to inside accordion div.
                $(errorElementDom).append(accordionContent);
                $(".tota11y-info-errors").append(errorElementDom);
            });
            //appending error count text to the tools main body.
            $(".tota11y-info-error-count").text(errorCount);
            prevErrorCount = errorCount;
        }
    });
}

//click code element to highligh the html element.
$(document).on('click', 'code', function (event) {
    // to remove all the error highlighting element and error highlighting border which is previously created.
    $("[id^=fina11y-error-indication-transperent-div]").remove();
    $('*').removeClass("tota11y-add-bg-boder");
    // get the current error element from the code tag.
    var fina11yCurrentElement = $(this).text();
    // get the current parent of the code element.
    var parentLi = $(this).closest("li.tota11y-info-error");
    fina11yCurrentElement = $.parseHTML(fina11yCurrentElement);
    // check for id attribute is present on the error element,
    var fina11yElementSelector = $(fina11yCurrentElement).attr('id');
    // check for the class attribute is present on the error element
    var fina11yCurrentElementClass = $(fina11yCurrentElement).attr('class');
    var testBoolean = typeof fina11yCurrentElementClass !== "undefined";
    // if id attr is not present and class is unavailible for finding the error element.
    if ((typeof fina11yElementSelector === "undefined") && (typeof fina11yCurrentElementClass !== "undefined")) {
        // to get the text of the current error element.
        fina11yElementText = $(fina11yCurrentElement).text();
        // extract all attributes and corresponding value from the given current element.
        var attributeList = extractAllAttributesAndValues(fina11yCurrentElement);
        // get the tag name of current error element.
        var currentTagName = $(fina11yCurrentElement[0]).context.localName;
        // finding the element by matching it with attribute list , element text and tagname.
        var findElement = findElementByMatchingAttributes(attributeList, fina11yElementText, currentTagName);
        // create error highlighting div with the element.
        createFina11yErrorHighlightingElement(findElement, parentLi);
        // when both id and class attribute of the error element is not availible.

    } else if ((typeof fina11yElementSelector === "undefined") && (typeof ($(fina11yCurrentElement).attr('class')) === "undefined")) {
        // getting the total no of attribute of current element.
        var attrCount = fina11yCurrentElement[0].attributes;
        if ($(attrCount).length > 0) {
            // extract all attributes and its values.
            var attributeList = extractAllAttributesAndValues(fina11yCurrentElement);

        }
        //get the innerHtml of current error element.
        fina11yElementText = $(fina11yCurrentElement).text();
        // get the tag name of current error element.
        var currentTagName = $(fina11yCurrentElement[0]).context.localName;
        // find the error elements dom by matching attribute list elementtext and tagname;
        var elementWithoutIdAndClass = findElementByMatchingAttributes(attributeList, fina11yElementText, currentTagName);
        // creating error highligting element over the errorr element.
        createFina11yErrorHighlightingElement(elementWithoutIdAndClass, parentLi);

    } else {
        // id is present and finding element with id attribute.
        fina11yElementSelector = "#" + $(fina11yCurrentElement).attr('id');
        var findElement = $(fina11yElementSelector);
        // creating error highligting element over the errorr element.
        createFina11yErrorHighlightingElement(findElement, parentLi);
    }
});

// click event for submitting the error solution to the database.
$(document).on('click', '[id^=fina11y-error-submit-btn]', function (event) {





    var currentBtn = $(this);
    // getting the error id from button.
    var submissionTime = Date.now();
    var errorId = $(this).attr('id').replace("fina11y-error-submit-btn-", "");
    // getting the toolname from button
    var currentButtonId = $(currentBtn).attr('id');
    let toolName = $("#" + currentButtonId).attr("data-toolname");
    //fetching the error code , remedy, remarks from the ui
    var errorSrcCode = $(this).parent().find(".fina11y-error-src-code").text();
    var errorSolution = $(this).parent().find(".language-markup.fina11y-error-code-snippet").text();
    var errorRemarks = $(this).parent().find(".language-markup.fina11y-error-remedy-box").text();
    // fetching the current url
    let currentUrl = window.location.href;
    // let currentUrl = "https://www.typescriptlang.org/";
    var jsonData = new Object();
    jsonData.urld = currentUrl;
    jsonData.toolName = toolName;
    jsonData.error = errorSrcCode;
    jsonData.submissionTime = submissionTime;
    jsonData.remedy = errorSolution;
    jsonData.remark = errorRemarks;

    $.ajax({
        url: pyDataFetchIP,
        // dataType: "json",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(jsonData),
        success: function (response) {
            console.log("response mongoo")
            // adding completed badge to the tools main body .
            $(fina11yParentLiElement).find(".tota11y-info-error-title").append("<span class='fina11y-completed-badge'>completed</span>");
            $("#" + currentButtonId).attr("disabled", true);
            $("#" + currentButtonId).css('cursor', 'not-allowed');
            // to show completed symbol after the response.
            let btnParent = $(currentBtn).closest('.accordion-body.js-accordion-body')
            let btnParentSibling = $(btnParent).siblings();
            $(btnParentSibling).append("<span class='fina11y-completed-badge'>completed</span>");
        },
        error: function (err) {
            console.log(err);
        }
    });

    // removing the toolanme from errorId;
    errorId = errorId.substring(0, errorId.indexOf('-'));

    $.ajax({
        url: " https://a11y.works/javaGet/remedystatus?id=" + errorId + "&toolname=" + toolName + "&url=" + currentUrl,
        contentType: "application/json",
        method: "GET",
        success: function (response) {
            console.log(response)
        }
    })
});

// click event for indicating no issue for that error
$(document).on('click', '[id^=fina11y-not-an-issue-btn]', function (event) {
    var currentBtn = $(this);
    // check the source of click
    let parentAccordionText = $('#fina11y-error-category-id-8').text();

    if (parentAccordionText === "Submitted Remedies"){
        var fixElement = $.parseHTML($(currentBtn).siblings('pre.language-markup.fina11y-error-code-remedy').text());
        $(currentElement).replaceWith(fixElement);
        
    }else{
        // getting the error id from button.
        var errorId = $(this).attr('id').replace("fina11y-not-an-issue-btn-", "");
        var fixElement = $.parseHTML($(currentBtn).siblings('pre.language-markup.fina11y-error-code-snippet').text());
        $(currentElement).replaceWith(fixElement);
    }

   
});

// to extract error sub category from the main category
$(document).on('click', '.tota11y-info-error-trigger', function (event) {
    var categoryLi = $(this);
    var categoryId = $(this).attr('id').replace("tota11y-category-error-id-", "");
    var jsonData = new Object();
    jsonData.id = categoryId;
    //clearing the html cotent inside the tool to display new content.
    $(".tota11y-info-errors").empty();
    $.ajax({
        url: "http://192.168.35.31:8005/htmlcsoutputbyid?page=1&size=100",
        dataType: "json",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(jsonData),
        success: function (response) {
            var errorCount = 0;
            $.each(response.content, function (index, errorObj) {
                // error count for displaying it on the tool main body.
                errorCount += 1;
                // creating dynamic element that contains the error details and  appending it with the toolbody
                var errorElementDom = $.parseHTML('<li class="tota11y-info-error"> <a aria-label="Scroll to error" href="#" class="tota11y-info-error-scroll"><div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-lens"></div><div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-handle"></div> </a> <a href="#" class="tota11y-info-error-trigger tota11y-collapsed"><div class="tota11y-info-error-title"> <span class="tota11y-info-error-chevron">›</span></div> </a><div class="tota11y-info-error-description tota11y-collapsed"><div><p class="fina11y-db-error-name"></p><p class="fina11y-db-error-st"> Consider using the following suggestion to fix the issue :</p><p class="fina11y-db-error-reference"> Consider using the following suggestion to fix the issue :</p><div class="tota11y-contrast-suggestion"> <span class="tota11y-color-hexes"> #0070f7/#ffffff </span> <span class="tota11y-swatches"> <span class="tota11y-swatch" style="background-color: #0070f7 !important"> </span> / <span class="tota11y-swatch" style="background-color: #ffffff !important"> </span> </span> has a ratio of <strong>4.51</strong> <br><label> Preview: <input class="preview-contrast-fix" type="checkbox"> </label></div></div><div class="tota11y-info-error-description-code-container"> <em>Relevant code:</em> <code>&lt;a class="nav-item-link active" itemprop="url" href="https://www.renderforest.com/subscription" data-link="pricing"&gt;Pricing&lt;/a&gt;</code></div><div class="tota11y-contrast-suggestion"><p>Suggestions</p> <br><input type="text" name="" id=""></div></div></li>');
                // adding error heading to fina11y body
                var headingChild = $(errorElementDom).find(".tota11y-info-error-title");
                $(errorElementDom).find("p.fina11y-db-error-name").html(errorObj.testCase);
                $(headingChild).append(errorObj.testCase);
                $(".tota11y-label-detail").html(errorObj.testCase);
                //adding error code snippet into fina11y body
                var errorCodeSnippet = $(errorElementDom).find('code');
                // appending error id with the code tag.
                $(errorElementDom).find("a.tota11y-info-error-trigger").attr('id', "tota11y-category-error-id-" + errorObj.id);
                // for categorization
                $(errorElementDom).find("p.fina11y-db-error-st").html(errorObj.st);
                $(errorElementDom).find("p.fina11y-db-error-reference").html(errorObj.reference);
                // cat end
                $(".tota11y-info-errors").append(errorElementDom);
            });
            //appending error count text to the tools main body.
            $(".tota11y-info-error-count").text(errorCount);
        },
        error: function (err) {
            // console.log(err);
        }
    });
});

// collapse test //
var accordion = (function () {
    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
    // default settings 
    var settings = {
        // animation speed
        speed: 400,
        // close all other accordion items if true
        oneOpen: false
    };
    return {
        // pass configurable object literal
        init: function ($settings) {
            $(document).on('click', '[id^=fina11y-sub-category-error-id-]', function (evt) {
                let parentAccordionText = $('#fina11y-error-category-id-8').text();
                // clearing the highlighting elements [orgg]
                $('[id^=fina11y-error-highlighting-main-div-]').remove();
                let errorCode;
                let currentElementWithHighlightingBorder = document.querySelectorAll(".tota11y-add-bg-boder");
                for (x of currentElementWithHighlightingBorder) {
                    if (x.classList.length === 1) {
                        x.removeAttribute("class");
                    } else {
                        $('*').removeClass("tota11y-add-bg-boder");
                    }
                }
                // to check whether the origin of the click is from remedy list or error list.
                if (parentAccordionText === "Submitted Remedies") {
                    // for clicking the remedy list
                    let errorCodeId;
                    let errorCodeSnippet;
                    try {
                        errorCodeId = $(evt.target).attr('id').replace("fina11y-sub-category-error-id-", "");
                        errorCodeSnippet = $(evt.target).siblings('.js-accordion-body').find(".fina11y-error-src-code").text();
                        findElementByCode(errorCodeSnippet, errorCodeId);
                    } catch (exception) {
                        console.log(`${exception} : exception occured`);
                    }

                    // to handle the replac all and click to highlight the replaced elements
                } else if (parentAccordionText === "Replaced Remedies") {
                    let errorCodeId;
                    let errorCodeSnippet;
                    try {
                        errorCodeId = $(evt.target).attr('id').replace("fina11y-sub-category-error-id-", "");
                        errorCodeSnippet = $(evt.target).siblings('.js-accordion-body').find(".fina11y-error-code-remedy").text();
                        findElementByCode(errorCodeSnippet, errorCodeId);
                    } catch (exception) {
                        console.log(`${exception} : exception occured`);
                    }
                } else {
                    // for clicking the error list
                    let errorCodeId = $(this).parent().find(".accordion-body.js-accordion-body").find("pre.language-markup.fina11y-error-code-snippet")[0];
                    try {
                        errorCodeId = $(errorCodeId).attr('id').replace("fina11y-error-code-id-", "");
                        errorCode = $("pre#fina11y-error-code-id-" + errorCodeId)[0].innerText;
                    } catch (exception) {
                        console.log(`${exception} : exception occured`);
                    }

                    // to manage the incompleted error codes ending with 3 dots. [o/p from achecker]
                    if (errorCode.substr(-3) === "...") {
                        console.log("incompleted code   ");
                        // searching for incompleted tag is properly closed.
                        findElementByIncompleteCode(errorCode, errorCodeId);
                    } else {
                        findElementByCode(errorCode, errorCodeId);
                    }
                }
                accordion.toggle($(this));
            });

            $(document).on('click', '[id^=fina11y-error-category-id-]', function () {
                accordion.toggle($(this));
            });
            $.extend(settings, $settings);
            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }
            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function ($this) {
            if (settings.oneOpen) {
                // adding sub category on clicking
                // checking for clicked on the main category accordion header.
                if (($this.attr('id').match('^fina11y-error-category-id-'))) {
                    var categoryLi = $this;
                    var categoryId = $($this).attr('id').replace("fina11y-error-category-id-", "");
                }
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            } else {

            }
            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function () {
    accordion.init({ speed: 300, oneOpen: true });
});
// collapse test end//

// function to find and highlight element
function findElementByCode(domElement, $errorCodeId) {
    $errorElement = $(domElement);
    //extracting id from element
    $errorElementId = $(domElement).attr('id');
    // extracting class names from element
    $errorElementClassNames = $($errorElement).attr('class');
    //extracting all attributes and values from element
    var $errorElementAttributesList;
    try {
        $errorElementAttributesList = extractAllAttributesAndValues($errorElement);
    } catch (exception) {
        console.log(`${exception} : exception occured`);
    }
    // extracting text from the error element.
    $errorElemenInnerHtml = $($errorElement).html();
    // extract the tagname
    $errorElementTagName = $($errorElement).prop("tagName");
    // checking for id is present or not . if present then find the element with id
    if ($errorElementId !== undefined) {
        highlightElementWithId($errorElementId, $errorCodeId);

    } else if ($errorElementClassNames !== undefined) {
        // removing the multiple spaces and combining into single space and then remove the single space by dot.
        $errorElementClassNames = $errorElementClassNames.replace(/\s\s+/g, ' ');
        $errorElementClassNames = $errorElementClassNames.replace(/ /g, ".");
        $elementsList = $("." + $errorElementClassNames);
        // checking for more than one element is present or not
        if ($elementsList.length > 1) {
            if ($errorElementAttributesList.length > 0) {
                // find element by matching classname, attributeList, elementText, tagName.
                findElementByClassAttrTextTagName($errorElementClassNames, $errorElementAttributesList, $errorElemenInnerHtml, $errorElementTagName, $errorCodeId);
            }
        } else {
            // if only one element is present then highlight it.
            var elementPosition = $($elementsList).offset();
            createErrorHighlightingElementOverDom($elementsList, elementPosition, $errorCodeId);
        }
    } else if ($errorElementId === undefined && $errorElementClassNames === undefined) {
        if ($errorElementAttributesList !== undefined) {
            finalElement = findElementByClassAttrTextTagName($errorElementClassNames, $errorElementAttributesList, $errorElemenInnerHtml, $errorElementTagName, $errorCodeId);
        }
    }
}

function highlightElementWithId(elementId, $errorCodeId) {
    $('#' + elementId).addClass("tota11y-add-bg-boder");
    var $errorElement = $('#' + elementId);
    var elementPosition = $($errorElement).offset();
    createErrorHighlightingElementOverDom($errorElement, elementPosition, $errorCodeId);
}

//generate error highlighting element over the error element
function createErrorHighlightingElementOverDom($errorElement, elementPosition, $errorCodeId) {
    // check the position of the element is inside the html boundary ie, not negative
    if (elementPosition.top < 0) {
        elementPosition.top = 0;
    }
    if (elementPosition.left < 0) {
        elementPosition.left = 0;
    }
    $($errorElement).addClass("tota11y-add-bg-boder");
    var $errorHighlighterElement = $.parseHTML(fina11yErrorHighlightingElementAll);
    // appending id with the error code id for identify which error highlight elements stands for which error code
    // spliting the id only 
    $($errorHighlighterElement).attr('id', "fina11y-error-highlighting-main-div-" + $errorCodeId.replace("fina11y-error-code-id-", ""));
    // adding error warning animation color changer
    $($errorHighlighterElement).addClass("fina11y-error-warning-glow-anim");
    $('body').append($errorHighlighterElement);
    $($errorHighlighterElement).offset({ top: elementPosition.top, left: elementPosition.left });
    var $parentErrorElement = $($errorCodeId);
    // spliting the id only 
    $errorCodeId = "#fina11y-error-code-snippet-id-" + $errorCodeId.replace("fina11y-error-code-id-", "");
    window.scrollTo(elementPosition.left, (elementPosition.top) - 100);
    currentElement = $errorElement;
}

// click event for the highlighting glowing element.
$(document).on('click', '[id^=fina11y-error-highlighting-main-div-]', function (event) {
    var $currentElement = $(this);
    var errorCodeId = $currentElement.attr('id').replace("fina11y-error-highlighting-main-div-", "");
    var $accordionElement = $("#fina11y-sub-category-error-id-" + errorCodeId);
    var $container = $($(".tota11y-info-section.active")),
        $scrollTo = $accordionElement;
    $container.scrollTop(
        $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    );
    $accordionElement.trigger('click')
});

// new
// finding element based on class attr txt tagname.
function findElementByClassAttrTextTagName(className, attributeList, elementText, tagName, errorCodeId) {
    if (className !== undefined) {
        tagName = tagName.toLowerCase();
        var attrNameAndValue = "";
        // to create a selector in the form ([ attr1 : value][attr2 : value]..) inorder to find the element based on attributes.
        $(attributeList).each(function (index, attr) {
            attrNameAndValue += '[' + attr.name + '="';
            attrNameAndValue += attr.value + '"]';
        });
        // creating selector with tagname.classname[attribute=value,..]
        var elementSelector = tagName + "." + className + attrNameAndValue;
        // finding the element with the selector.
        $finalErrorElement = $(elementSelector);
        var a11yErrorElement;
        if ($finalErrorElement.length !== 0) {
            if ($finalErrorElement.length > 1) {
                $.each($finalErrorElement, function (index, errorElement) {
                    var txt = $(errorElement).html();
                    if (txt == elementText) {
                        a11yErrorElement = errorElement;
                    }
                });
                // getting the position of the element;
                var $elementPosition = $(a11yErrorElement).offset();
                if ($elementPosition.left == 0 && $elementPosition.top == 0) {
                    console.log("maybe an invisible element");
                    // search for carousel
                    var carouselFound = $($finalErrorElement).closest(".carousel1.slide");
                    if (carouselFound.length > 0) {
                        console.log("it is a carousel");
                        // removing all other active classes.
                        var carouselItem = $(carouselFound).find(".item");
                        $(carouselItem).removeClass("active");
                        var carouselItem = (a11yErrorElement).closest(".item");
                        $(carouselItem).addClass("active");
                        $elementPosition = $(a11yErrorElement).offset();
                        createErrorHighlightingElementOverDom(a11yErrorElement, $elementPosition, errorCodeId);
                    }
                } else {
                    var $elementPosition = $(a11yErrorElement).offset();
                    createErrorHighlightingElementOverDom(a11yErrorElement, $elementPosition, errorCodeId);

                }
            } else {
                $elementPosition = $($finalErrorElement).offset();
                if ($elementPosition.top === 0 && $elementPosition.left === 0) {
                    $($finalErrorElement).show();
                    $elementPosition = $($finalErrorElement).offset();
                }
                createErrorHighlightingElementOverDom($finalErrorElement, $elementPosition, errorCodeId);
            }
        } else {
            console.log("ELEMENT CANT FOUND.. ");
            // if no element is found. mark the accordion header with red bg
            // fetch the error id
            var accordionSubId = "fina11y-sub-category-error-id-" + errorCodeId.replace("fina11y-error-code-id-", "")
            $("#" + accordionSubId).attr("style", "background-color:red !important");
        }

    } else {
        console.log("**************** NO CLASS ******************");
        var attrNameAndValue = "";
        // to create a selector in the form ([ attr1 : value][attr2 : value]..) inorder to find the element based on attributes.
        $(attributeList).each(function (index, attr) {
            attrNameAndValue += '[' + attr.name + '="';
            attrNameAndValue += attr.value + '"]';
        });
        tagName = tagName.toLowerCase();
        var elementSelector = tagName + ":not([class])" + attrNameAndValue;
        // filter to exclude element from tool
        let filterSelector = "#moveableBody " + tagName;
        var finalElement = $(elementSelector).not($(filterSelector));
        if (finalElement.length < 1) {
            // to avoid / symbol error on src attribute.
            if (elementSelector.indexOf("src") != -1) {
                var srcStartIndex = elementSelector.indexOf("src=\"");
                elementSelector = elementSelector.substring(0, srcStartIndex + 5) + elementSelector.substring(srcStartIndex + 6);
                finalElement = $(elementSelector);
                if (finalElement.length < 1) {
                    // to replace the occurance of / from href value
                    var hrefStartIndex = elementSelector.indexOf("href=\"");
                    elementSelector = elementSelector.substring(0, hrefStartIndex + 5) + elementSelector.substring(hrefStartIndex + 6);
                    finalElement = $(elementSelector);
                }
            }
        }
        if (finalElement.length > 1) {
            $.each(finalElement, (i, element) => {
                if ((element.attributes.length) === attributeList.length) {
                    console.log("equal no of atttr")
                    if ($(element).html() === elementText) {
                        console.log("same element")
                        finalElement = element;
                    }
                }
            });

            if(finalElement.length === 1){
                var elementPosition = $(finalElement).offset();
                // check for the position is 0,0
                if (elementPosition.left === 0 && elementPosition.top === 0) {
                    $(finalElement).show();
                    elementPosition = $(finalElement).offset();
                }
                createErrorHighlightingElementOverDom(finalElement, elementPosition, errorCodeId);
            }else{
                console.log("##############  MULTIPLE ELEMENT FOUND ##################");
            }

           
        } else {
            // atleast one element is present
            if (finalElement.length > 0) {
                var elementPosition = $(finalElement).offset();
                if (elementPosition.left === 0 && elementPosition.top === 0) {
                    $(finalElement).show();
                    elementPosition = $(finalElement).offset();
                }
                createErrorHighlightingElementOverDom(finalElement, elementPosition, errorCodeId);
            } else {
                // if no element is found. mark the accordion header with red bg
                // fetch the error id
                var accordionSubId = "fina11y-sub-category-error-id-" + errorCodeId.replace("fina11y-error-code-id-", "")
                $("#" + accordionSubId).attr("style", "background-color:red !important");
            }
        }
    }
    // currentElement = finalElement;
}

// add issue button 
$(document).on('click', '.btn.btn-3.tota11y-a-btn', addIssueBtnClick);

function addIssueBtnClick() {
    var currentBtn = $(this);
    var pp = document.createElement("p").innerHTML = "Hi";
    let issueRenderElement = $.parseHTML('<div class="fina11y-code-editor"><div> <label class="tota11y-error-label">SC :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ST :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ERROR CODE :</label> <pre class="fina11y-error-src-code" contenteditable="true" style="background-color:rgb(221, 221, 221);">Enter Error code snippet...</pre></div> <label>Remedy</label><pre class="language-markup fina11y-error-code-snippet" contenteditable="true" id="fina11y-error-code-id-36"> Enter Remedy Here ...</pre><label> Remarks </label><pre class="language-markup fina11y-error-remedy-box" contenteditable="true" id="fina11y-error-remarks-id-36"> enter your remarks here</pre><button id="fina11y-error-submit-btn" class="fina11y-bot fina11y-bot-red">submit</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Replace Code</button></div>');
    $(currentBtn).after(issueRenderElement);
}

$(document).on('click', '.fina11y-other-tools-text', openToolsMenu);

function openToolsMenu() {
    let currentBtn = $(this);
    let displayStatus = $('.fina11y-other-tools-menu').css('display');
    if (displayStatus === "block") {
        $('.fina11y-other-tools-menu').slideUp("fast");
    } else {
        $('#fina11y-other-tools-id').slideDown("fast");
        let accordionContainer = $(".tota11y-info-section.active");
        $(accordionContainer).scrollTop(0);

    }
}

$(document).on('click', "#myfina11y-onoff-toggle", () => {
    var htmlCarousels = $(".carousel.slide");
    var carouselsList = $(htmlCarousels).find("[class*=active]")
    $.each(carouselsList, function (i, element) {
        var siblings = $(element).siblings();
        $.each(siblings, function (i, element) {
            $(element).addClass("active")
        });
    })
})

// mouose over and mouse out on highlighting div
$(document).on('mouseenter', '.tota11y-add-bg-boder', () => {
    $('div[id^=fina11y-error-highlighting-main-div-]').css('display', 'none');
});

$(document).on('mouseleave', '.tota11y-add-bg-boder', () => {
    $('div[id^=fina11y-error-highlighting-main-div-]').css('display', 'block');
});

// to fetch the remedy from mongo and display it for replacing src code with remedy
$(document).on('click', '#fina11y-fix-and-replace', () => {
    console.log("fix and replace");
    // clearing the previously generated contents 
    $('.tota11y-info-errors').empty();
    // to remove previously generated accordions
    document.querySelectorAll('.accordion.js-accordion').forEach(function (element) {
        element.remove();
    });
    // clearing the highlighting elements [orgg]
    $('[id^=fina11y-error-highlighting-main-div-]').remove();
    let errorCode;
    let currentElementWithHighlightingBorder = document.querySelectorAll(".tota11y-add-bg-boder");
    for (x of currentElementWithHighlightingBorder) {
        if (x.classList.length === 1) {
            x.removeAttribute("class");
        } else {
            $('*').removeClass("tota11y-add-bg-boder");
        }
    }
    var accordion = $.parseHTML(' <div class="accordion js-accordion"></div>');
    var accordionMainWrapper = $.parseHTML('<div class="accordion__item js-accordion-item active"><div class="accordion-header js-accordion-header" id="fina11y-error-category-id-8">Replaced Remedies</div><div class="accordion-body js-accordion-body" style="display: block;"><div class="accordion-body__contents">inside main panel 1</div><div class="accordion js-accordion"></div></div></div>');
    let currentUrl = window.location.href;
    // let currentUrl = "https://www.typescriptlang.org/";
    var jsonData = new Object();
    jsonData.urld = currentUrl;
    // ajax call to fetch the data


    $.ajax({
        type: "POST", //rest Type
        url: pyDataFetchIP + "get",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(jsonData),
        success: function (response) {
            response = JSON.parse(response);
            var errorCount = 0;

            // enabling the error count and text if it is disabled.
            $('.tota11y-info-tab-anchor-text').parent().css('display', 'block');
            // changing the error text to remedy in footer
            $('.tota11y-info-tab-anchor-text').html("Replaced : ");


            $.each(response, function (index, errorObj) {
                var accordionSubPanel = $.parseHTML(' <div class="accordion__item js-accordion-item active" id="fina11y-error-code-snippet-id-36"> <div class="accordion-header js-accordion-header" id="fina11y-sub-category-error-id-36"></div><div class="accordion-body js-accordion-body" style="display: none; height: 103px; padding-top: 10px; margin-top: 0px; padding-bottom: 10px; margin-bottom: 0px;"> <div class="accordion-body__contents"> <div class="fina11y-code-editor"> <div> <label class="tota11y-error-label">SC :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ST :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ERROR CODE :</label> <pre class="fina11y-error-src-code"></pre> </div><label>Error Remedy</label> <pre class="language-markup fina11y-error-code-remedy" contenteditable="true" id="fina11y-error-code-id-36"> prblm source code here</pre> <label style="display:none"> Remarks </label> <pre class="language-markup fina11y-error-remedy-box" contenteditable="true" id="fina11y-error-remarks-id-36" style="display:none"> enter your remarks here</pre> <button id="fina11y-error-re-submit-btn" class="fina11y-bot fina11y-bot-red" style="display:none" >Re-Submit</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green" style="display:none">Replace Code</button> </div></div></div></div>');
                $(accordionSubPanel).attr("id", "fina11y-error-code-snippet-id-" + errorObj._id);
                $(accordionSubPanel).find("#fina11y-sub-category-error-id-36").attr("id", "fina11y-sub-category-error-id-" + errorObj._id);
                $(accordionSubPanel).find("pre[id=fina11y-error-code-id-36]").attr("id", "fina11y-error-code-id-" + errorObj._id);
                $(accordionSubPanel).find("pre[id=fina11y-error-remarks-id-36]").attr("id", "fina11y-error-remarks-id-" + errorObj._id);
                $(accordionSubPanel).find("button[id=fina11y-error-re-submit-btn]").attr("id", "fina11y-error-re-submit-btn-" + errorObj._id);
                // adding toolname to the button 
                $(accordionSubPanel).find("button[id=fina11y-error-re-submit-btn-" + errorObj._id + "]").attr("data-toolname", "errorObj.toolname");
                $(accordionSubPanel).find("pre.fina11y-error-src-code").text(errorObj.error);
                $(accordionSubPanel).find(".fina11y-error-code-remedy").text(errorObj.remedy);
                $(accordionSubPanel).find(".accordion-header").html("error : " + index);
                $(accordionMainWrapper).find(".accordion.js-accordion").append(accordionSubPanel);

                let errorCodeForReplace = $.parseHTML(errorObj.error);
                let errorIdForReplace = errorObj._id;
                // console.log("============ REPLACE===============");
                let testElement = findDomByCode(errorObj.error);
                replaceErrorWithRemedy(testElement, errorObj.remedy);
                // console.log("============ REPLACE===============");
                errorCount++;
            });
            $(accordion).append(accordionMainWrapper);
            $(".tota11y-info-errors").append(accordion);
            //appending error count text to the tools main body.
            $(".tota11y-info-error-count").text(errorCount);
        }
    });
});

// new method for finding element for replacing
function findDomByCode(domElement) {
    // parse string html code to dom element
    let errorElement = $.parseHTML(domElement);
    // get id of element
    let domId = $(errorElement).attr('id');
    // get tagname of current element
    let domTagName = $(errorElement).prop("tagName");
    // get innerhtml of current element
    let domInnerHtml = $(errorElement).html();
    // check for classname
    let domClassnames = $(errorElement).attr('class');
    // getting the list of classnames
    let domClassList = $(errorElement)[0].classList;
    // find attributes;
    let domAttributesList;
    try {
        domAttributesList = extractAllAttributesAndValues(errorElement);
    } catch (exception) {
        console.log(`${exception} : exception occured during extracting attributes list`);
    }

    // checking for id is present
    if (domId !== undefined) {
        // finding element based on id;
        errorElementForReplace = $('#' + domId);
        // if one element is present with the given id
        if (errorElementForReplace.length === 1 && errorElementForReplace.length !== 0) {
            return errorElementForReplace;
        } else {
            console.log("multiple element with same id is present !!!");
            console.log(errorElementForReplace);
            console.log("multiple element with same id is present !!! --- end");
        }

        // check for classname is present
    } else if (domClassnames !== undefined) {
        // check for classlist have more than one class.(for combining with . dot for creating css selector)
        if (domClassList.length > 1) {
            let finalErrorElement;
            // combining the classname to generate css classname selector by removing the space and adding dot.
            domClassnames = domClassnames.replace(/\s\s+/g, ' ');
            domClassnames = domClassnames.replace(/ /g, ".");
            // generate css selector based on the attributes and tagnames.
            let attributeSelector = generateAttributeSelector(domAttributesList, domTagName);
            finalErrorElement = $(attributeSelector);
            // checking for only one element is present 
            if (finalErrorElement.length !== 0 && finalErrorElement.length === 1) {
                errorElementForReplace = finalErrorElement;
                return errorElementForReplace;
            } else {
                let attributeSelector = generateAttributeSelector(domAttributesList, domTagName);
                finalErrorElement = $(attributeSelector);
                if (finalErrorElement.length === 1) {
                    errorElementForReplace = finalErrorElement;
                    return errorElementForReplace;
                } else {
                    console.log(" multiple element occcccc ")
                    console.log(finalErrorElement)
                    console.log(" multiple element occcccc --- end ")
                }
            }
            // if only single classname is present in the error code.
        } else {
            // find element with single classname
            let finalErrorElement = $('.' + domClassnames);
            // check for only one element is finally present
            if (finalErrorElement.length === 1 && finalErrorElement.length !== 0) {
                errorElementForReplace = null;
                errorElementForReplace = finalErrorElement;
                return errorElementForReplace;

            } else {
                let attributeSelector = generateAttributeSelector(domAttributesList, domTagName);
                finalErrorElement = $(attributeSelector);
                let errorElementWithSingleClass2 = [];
                if (finalErrorElement.length === 1 && finalErrorElement.length !== 0) {
                    errorElementForReplace = null;
                    errorElementForReplace = finalErrorElement;
                    return errorElementForReplace;
                } else if (finalErrorElement.length !== 0) {

                    $.each(finalErrorElement, (i, element) => {
                        if ($(element).html() === domInnerHtml) {
                            errorElementWithSingleClass2.push(element);
                        }
                    });
                    if (errorElementWithSingleClass2.length === 1) {
                        errorElementForReplace = null;
                        errorElementForReplace = errorElementWithSingleClass2[0];
                        return errorElementForReplace;
                    } else {
                        console.log("multiple element with the single class after attr filter")
                        console.log(errorElementWithSingleClass2);
                        console.log("multiple element with the single class after attr filter --- end")
                    }
                }
            }
        }

        // if classname is not present but attributes are present.
    } else if (domClassnames === undefined && domAttributesList.length > 0) {
        let finalErrorElement;
        // genrate the attribute selector
        let attributeSelector = generateAttributeSelector(domAttributesList, domTagName);
        finalErrorElement = $(attributeSelector);
        // if only element is present.
        if (finalErrorElement.length > 0 && finalErrorElement.length === 1) {
            errorElementForReplace = finalErrorElement;
            return errorElementForReplace;
        } else {
            let domWithOutClass = [];
            // filter and remove element that have classnames.
            $.each(finalErrorElement, (i, element) => {
                if (element.classList.length === 0) {
                    domWithOutClass.push(element);
                }
            });
            // after filtering , if the array containing single element.
            if (domWithOutClass.length === 1) {
                finalErrorElement = null;
                finalErrorElement = domWithOutClass;
                errorElementForReplace = finalErrorElement;
                return errorElementForReplace;
                // if multiple element is present
            } else {
                $.each(domWithOutClass, (i, element) => {
                    // match element with the inner html
                    if ($(element).html() === domInnerHtml) {
                        errorElementForReplace = element;
                    }
                });
                if (errorElementForReplace.length > 1) {
                    console.log("multiple element present[]");
                } else {
                    return errorElementForReplace;
                }
            }
        }
        // if error element have 0 attribute.
    } else if (domAttributesList.length === 0) {
        // element without attr
        // find element by tagname
        let finalErrorDomElement = $(domTagName);
        let domElementWithoutAttributes = [];
        $.each(finalErrorDomElement, (i, element) => {
            try {
                if ($(element)[0].attributes.length === 0) {
                    // filtering the element that doesnt have any attribute list.
                    domElementWithoutAttributes.push(element);
                }
            } catch (exception) {
                console.log("exception occured during finding the length of attributes")
                console.log($(element))
                console.log("exception occured during finding the length of attributes--- end")
            }

        });
        let matchedInnerHtml = [];
        // iterate each element and match inner html content and store in array
        for (x of domElementWithoutAttributes) {
            if ($(x).html() === domInnerHtml) {
                matchedInnerHtml.push(x);
            }
        }
        // if single element is in the array
        if (matchedInnerHtml.length === 1) {
            errorElementForReplace = null;
            errorElementForReplace = matchedInnerHtml[0];
            return errorElementForReplace;
        } else {
            console.log("unable to locate")
        }
    }
}

// generate attribute selector with tagname
function generateAttributeSelector(attributeList, tagName) {
    tagName = tagName.toLowerCase();
    let attrNameAndValue = `${tagName}`;
    // to create a selector in the form ([ attr1 : value][attr2 : value]..) inorder to find the element based on attributes.
    $(attributeList).each(function (index, attr) {
        attrNameAndValue += '[' + attr.name + '="';
        attrNameAndValue += attr.value + '"]';
    });
    return attrNameAndValue;
}

// to replace the error element code with remedy
function replaceErrorWithRemedy(errorDom, remedy) {
    $(errorDom).replaceWith(remedy);
}

// button to add error manually
$(document).on('click', "#fina11y-add-error-btn", (event) => {
    // disable the error count and text.
    $('.tota11y-info-tab-anchor-text').parent().css('display', 'none');
    // removing the inner content of the parent ul
    $('.tota11y-info-errors').empty();
    // rendering the html content with category,subcategory,error,remedy,remark box
    var addErrorHtml = $.parseHTML('<div class="fina11y-add-manual-errors"> <label class="fina11y-add-error-label" >Category</label><pre id="fina11y-manual-error-cat" class="fina11y-add-error-pre-input" contenteditable="true">Enter category</pre><label class="fina11y-add-error-label" >Sub Category</label><pre id="fina11y-manual-error-sub-cat" class="fina11y-add-error-pre-input" contenteditable="true">Enter subCategory</pre><label class="fina11y-add-error-label">Error Code</label><pre id="fina11y-manual-error-code" class="fina11y-add-error-pre-input" contenteditable="true">Enter error code here</pre><label class="fina11y-add-error-label">Remedy</label><pre id="fina11y-manual-error-remedy" class="fina11y-add-error-pre-input" contenteditable="true">Enter remedy Here</pre><label class="fina11y-add-error-label">Remarks</label><pre id="fina11y-manual-error-remarks" class="fina11y-add-error-pre-input" contenteditable="true">Add remarks</pre><label id="valid-error-txt">error label</label><button id="fina11y-manual-error-submit-btn" class="fina11y-bot fina11y-bot-red">submit</button> <button id="fina11y-manual-error-replace-btn" class="fina11y-bot fina11y-bot-green">Replace Code</button></div>');
    // rendering the accordion
    var accordion = $.parseHTML('<div class="accordion js-accordion"><div class="accordion__item js-accordion-item active"><div class="accordion-header js-accordion-header">Add Errors Manually</div><div class="accordion-body js-accordion-body" style="display: block;"><div class="accordion-body__contents"></div></div></div></div>');
    // appending the html content to accordion body
    $(accordion).find('.accordion-body__contents').append(addErrorHtml)
    $(".tota11y-info-errors").append(accordion);
});


// submitting the manual errors to mongodb
$(document).on('click', "#fina11y-manual-error-submit-btn", (event) => {


    // validating all textbox have value or not.
    let emptyTextBox = manualAddErrorTxtBoxValidation();
    if (emptyTextBox) {
        // fetching the current button from the event 
        let currentBtn = $(event.target);
        // disabling the button to prevent the further click
        $(currentBtn).attr("disabled", true);
        // fetching the value from the textbox
        let errorCategory = $('#fina11y-manual-error-cat').text();
        let errorSubCategory = $('#fina11y-manual-error-sub-cat').text();
        let errorCode = $('#fina11y-manual-error-code').text();
        let errorRemedy = $('#fina11y-manual-error-remedy').text();
        let errorRemarks = $('#fina11y-manual-error-remarks').text();
        // creating the json object for post
        var jsonData = new Object();
        jsonData.urld = window.location.href;
        jsonData.category = errorCategory;
        jsonData.subCategory = errorSubCategory;
        jsonData.error = errorCode;
        jsonData.remedy = errorRemedy;
        jsonData.remark = errorRemarks;

        // ajax post to save the manually added error to db;
        $.ajax({
            url: pyDataFetchIP,
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify(jsonData),
            success: function (response) {
                console.log(response);
                // removing the rendered elements from the UI.
                $('.tota11y-info-errors').empty();
                // adding value saved text msg to UI
                $('.tota11y-info-errors').append('<label style="color : white !important;padding: 37% 30% 30% 36% !important;">Error added to db</label>');
            }
        });



    } else {

    }



    // if (confirm('Are you sure you want to save this thing into the database?')) {
    //     // Save it!

    //     console.log("going to savve")
    // } else {
    //     // Do nothing!
    // }

});

// to get the submitted remedies
$(document).on('click', '#fina11y-view-remedy-btn', (event) => {
    // clearing the previously generated contents 
    $('.tota11y-info-errors').empty();
    // to render the accordion elements
    var accordion = $.parseHTML(' <div class="accordion js-accordion"></div>');
    var accordionMainWrapper = $.parseHTML('<div class="accordion__item js-accordion-item active"><div class="accordion-header js-accordion-header" id="fina11y-error-category-id-8">Submitted Remedies</div><div class="accordion-body js-accordion-body" style="display: block;"><div class="accordion-body__contents">inside main panel 1</div><div class="accordion js-accordion"></div></div></div>');
    // let currentUrl = "https://www.typescriptlang.org/";
    var jsonData = new Object();
    jsonData.urld = window.location.href;
    // ajax call to fetch the completed remedies
    $.ajax({
        type: "POST", //rest Type
        url: pyDataFetchIP + "get",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(jsonData),
        success: function (response) {
            // enabling the error count and text if it is disabled.
            $('.tota11y-info-tab-anchor-text').parent().css('display', 'block');
            // changing the error text to remedy in footer
            $('.tota11y-info-tab-anchor-text').html("Remedy : ");
            let remedyCount = 0;
            response = JSON.parse(response);
            $.each(response, (i, element) => {
                var accordionSubPanel = $.parseHTML(' <div class="accordion__item js-accordion-item active" id="fina11y-error-code-snippet-id-36"> <div class="accordion-header js-accordion-header" id="fina11y-sub-category-error-id-36"></div><div class="accordion-body js-accordion-body" style="display: none; height: 103px; padding-top: 10px; margin-top: 0px; padding-bottom: 10px; margin-bottom: 0px;"> <div class="accordion-body__contents"> <div class="fina11y-code-editor"> <div> <label class="tota11y-error-label">SC :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ST :</label> <span class="fina11y-label-text">..</span></div><div> <label class="tota11y-error-label">ERROR CODE :</label> <pre class="fina11y-error-src-code"></pre> </div><label>Error Remedy</label> <pre class="language-markup fina11y-error-code-remedy" contenteditable="true" id="fina11y-error-code-id-36"> prblm source code here</pre> <label> Remarks </label> <pre class="language-markup fina11y-error-remedy-box" contenteditable="true" id="fina11y-error-remarks-id-36"> enter your remarks here</pre> <button id="fina11y-error-re-submit-btn" class="fina11y-bot fina11y-bot-red" >Re-Submit</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Replace Code</button> </div></div></div></div>');
                $(accordionSubPanel).attr("id", "fina11y-error-code-snippet-id-" + element._id);
                $(accordionSubPanel).find("#fina11y-sub-category-error-id-36").attr("id", "fina11y-sub-category-error-id-" + element._id);
                $(accordionSubPanel).find("pre[id=fina11y-error-code-id-36]").attr("id", "fina11y-error-code-id-" + element._id);
                $(accordionSubPanel).find("pre[id=fina11y-error-remarks-id-36]").attr("id", "fina11y-error-remarks-id-" + element._id);
                $(accordionSubPanel).find("button[id=fina11y-error-re-submit-btn]").attr("id", "fina11y-error-re-submit-btn-" + element._id);
                // adding toolname to the button 
                $(accordionSubPanel).find("button[id=fina11y-error-re-submit-btn-" + element._id + "]").attr("data-toolname", "element.toolname");
                $(accordionSubPanel).find("pre.fina11y-error-src-code").text(element.error);
                $(accordionSubPanel).find(".fina11y-error-code-remedy").text(element.remedy);
                $(accordionSubPanel).find("pre[id^='fina11y-error-remarks-id-']").text(element.remark);
                $(accordionSubPanel).find(".accordion-header").html("error : " + i);
                $(accordionMainWrapper).find(".accordion.js-accordion").append(accordionSubPanel);
                remedyCount++;
            });
            $(accordion).append(accordionMainWrapper);
            $(".tota11y-info-errors").append(accordion);
            //appending remedy count text to the tools main body.
            $(".tota11y-info-error-count").text(remedyCount);
        }
    });
});

// click on re-submit remedy button
$(document).on('click', '[id^=fina11y-error-re-submit-btn-]', (evt) => {
    var parentDiv = $(evt.target).parent();
    var submissionTime = Date.now();
    let errorId = $(parentDiv).find("pre[id^=fina11y-error-code-id-]").attr('id').replace("fina11y-error-code-id-", "");
    let errorCodeSnippet = $(parentDiv).find("pre.fina11y-error-src-code").text();
    let errorRemedy = $(parentDiv).find("pre[id^=fina11y-error-code-id-]").text();
    let errorRemarks = $(parentDiv).find("pre[id^=fina11y-error-remarks-id-]").text();
    let currentBtn = $(evt.target);
    let currentButtonId = $(evt.target).attr('id');
    console.log(currentButtonId)
    var jsonData = new Object();
    jsonData._id = errorId;
    jsonData.urld = window.location.href;
    jsonData.error = errorCodeSnippet;
    jsonData.remedy = errorRemedy;
    jsonData.submissionTime = submissionTime;
    jsonData.remark = errorRemarks;
    console.log(JSON.stringify(jsonData))
    // re-submitting the remedy to mongodb
    $.ajax({
        url: pyDataFetchIP + "update",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(jsonData),
        success: function (response) {
            // adding completed badge to the tools main body .
            $(fina11yParentLiElement).find(".tota11y-info-error-title").append("<span class='fina11y-completed-badge'>completed</span>");
            $("#" + currentButtonId).attr("disabled", true);
            $("#" + currentButtonId).css('cursor', 'not-allowed');
            // to show completed symbol after the response.
            let btnParent = $(currentBtn).closest('.accordion-body.js-accordion-body')
            let btnParentSibling = $(btnParent).siblings();
            $(btnParentSibling).append("<span class='fina11y-completed-badge'>completed</span>");
        }
    });
});

// to find the element from incomplete source code snippet ( [o/p] of achecker )
function findElementByIncompleteCode(errorCode, errorCodeId) {

    let incompleteEle;
    try {
        incompleteEle = $(errorCode);
        if (errorCode.indexOf('>') !== -1) {
            console.log("-----------inner html test----------")
            console.log(errorCode.substring(errorCode.indexOf('>'), errorCode.indexOf("...")));
            console.log("-----------inner html test----------")
        }
    } catch (exception) {
        console.log("unable to locate incompleted element")
    }
    if (incompleteEle) {
        console.log("incomplted element found with $$")
        incompleteEle = $(incompleteEle).prop('outerHTML');
        findElementByCode(incompleteEle, errorCodeId);
    } else {
        // searching for the id  attribute
        if (errorCode.indexOf('id=') != -1) {
            let elementId = errorCode.substring(errorCode.indexOf('id='), errorCode.length);
            elementId = elementId.substring(0, errorCode.indexOf('" ') - 1);
            // find element based on the id;
            let elementWithId = $('#' + elementId);
            if (elementWithId) {
                console.log("element found with ID")
                incompleteEle = $(elementWithId).prop('outerHTML');
                findElementByCode(incompleteEle, errorCodeId);
            } else {
                console.log("cant find incomplete element with id");
            }
        }
        // searching for class attr
        if (errorCode.indexOf('class=') != -1) {
            console.log("class found in incomplted element")
            let classname = errorCode.substring(errorCode.indexOf('class='), errorCode.length);
            classname = classname.substring(0, classname.indexOf('" '));
            classname = classname.replace('class="', "");
            // search element with the classname
            let elementByClassname = "";
            // check for multiple class;
            if (classname.indexOf(" ") !== -1) {
                // multiple classname found.
                let classArr = classname.split(" ");
                let classSelector = "";
                for (x of classArr) {
                    classSelector += "." + x;
                }
                elementByClassname = $(classSelector);
            } else {
                elementByClassname = $("." + classname);
            }
            if (elementByClassname.length === 1) {
                console.log("1 incomplete element with the classname found");
                // take the element string value
                let elementStr = $(elementByClassname).prop('outerHTML');
                findElementByCode(elementStr, errorCodeId);
            } else if (elementByClassname.length !== 0) {
                // fetching all attributes
                if (errorCode.indexOf('>') !== -1) {
                    console.log("element with proper closing tag");
                    // trim the element with closing tag
                    let elementTillClosingTag = errorCode.substring(0, errorCode.indexOf('>'));
                    let attrArray = elementTillClosingTag.split('=');
                    let attrNameValueMap = new Map();
                    let attrName = [];
                    let attrVal = [];
                    for (let i = 0; i < attrArray.length; i++) {
                        if (i < attrArray.length - 1) {
                            let key = attrArray[i].substring(attrArray[i].indexOf(" ") + 1, attrArray[i].length);;
                            let val = attrArray[i + 1].substring(0, attrArray[i + 1].lastIndexOf('"'));
                            if (val !== "") {
                                attrNameValueMap.set(key, val.replace('"', ""));
                            }
                        }
                    }
                    let tagName = errorCode.substring(0, errorCode.indexOf(" ")).replace("<", "");
                    let selector = attributeSelectorGenerator(tagName, attrNameValueMap, true);
                    //    find element using the generated selector
                    let incompletedElement = $(selector);
                    if (incompletedElement.length > 0 && incompletedElement.length === 1) {
                        //generating the string representation of the element.
                        let elementStr = $(incompletedElement).prop('outerHTML');
                        findElementByCode(elementStr, errorCodeId);
                    } else {
                        console.log("multiple element found with the attrcss selector")
                    }

                } else {
                    let attrArray = errorCode.split('=');
                    console.log("element without closetag");
                    let attrNameValueMap = new Map();
                    let attrName = [];
                    let attrVal = [];
                    for (let i = 0; i < attrArray.length; i++) {
                        if (i < attrArray.length - 1) {
                            let key = attrArray[i].substring(attrArray[i].indexOf(" ") + 1, attrArray[i].length);;
                            let val = attrArray[i + 1].substring(0, attrArray[i + 1].lastIndexOf('"'));
                            if (val !== "") {
                                attrNameValueMap.set(key, val.replace('"', ""));
                            }

                        }
                    }
                    // generating selector;
                    // getting the tagname
                    let tagName = errorCode.substring(0, errorCode.indexOf(" ")).replace("<", "");
                    let selector = attributeSelectorGenerator(tagName, attrNameValueMap, true);
                    //    find element using the generated selector
                    let incompletedElement = $(selector);
                    if (incompletedElement.length > 0 && incompletedElement.length === 1) {
                        //generating the string representation of the element.
                        let elementStr = $(incompletedElement).prop('outerHTML');
                        findElementByCode(elementStr, errorCodeId);
                    } else {
                        console.log("multiple element found with the attrcss selector")
                    }
                }
            } else {
                console.log("no element found")
            }
            // element without classname
        } else {
            console.log("no class found");
            // find attributes name and value pair;
            // checking for proper closing tag
            if (errorCode.indexOf('>') !== -1) {
                console.log("element with proper closing tag [without classname] ");
                // trim the element with closing tag
                let elementTillClosingTag = errorCode.substring(0, errorCode.indexOf('>'));
                let attrArray = elementTillClosingTag.split('=');
                let attrNameValueMap = new Map();
                let attrName = [];
                let attrVal = [];
                for (let i = 0; i < attrArray.length; i++) {
                    if (i < attrArray.length - 1) {
                        let key = attrArray[i].substring(attrArray[i].indexOf(" ") + 1, attrArray[i].length);;
                        let val = attrArray[i + 1].substring(0, attrArray[i + 1].lastIndexOf('"'));
                        if (val !== "") {
                            attrNameValueMap.set(key, val.replace('"', ""));
                        }
                    }
                }
                // generating selector;
                // getting the tagname
                let tagName = errorCode.substring(0, errorCode.indexOf(" ")).replace("<", "");
                let selector = attributeSelectorGenerator(tagName, attrNameValueMap, true);
                //    find element using the generated selector
                let incompletedElement = $(selector);
                if (incompletedElement.length > 0 && incompletedElement.length === 1) {
                    //generating the string representation of the element.
                    let elementStr = $(incompletedElement).prop('outerHTML');
                    findElementByCode(elementStr, errorCodeId);
                } else {
                    console.log("multiple element found with the attrcss selector")
                }
                // element without proper closing tag
            } else {
                console.log("element witout closing tag [witout classname]")
                let attrArray = errorCode.split('=');
                let attrNameValueMap = new Map();
                let attrName = [];
                let attrVal = [];
                for (let i = 0; i < attrArray.length; i++) {
                    if (i < attrArray.length - 1) {
                        let key = attrArray[i].substring(attrArray[i].indexOf(" ") + 1, attrArray[i].length);;
                        let val = attrArray[i + 1].substring(0, attrArray[i + 1].lastIndexOf('"'));
                        if (val !== "") {
                            attrNameValueMap.set(key, val.replace('"', ""));
                        }
                    }
                }
                // generating selector;
                // getting the tagname
                let tagName = errorCode.substring(0, errorCode.indexOf(" ")).replace("<", "");
                let selector = attributeSelectorGenerator(tagName, attrNameValueMap, false);
                //    find element using the generated selector
                let incompletedElement = $(selector);
                if (incompletedElement.length > 0 && incompletedElement.length === 1) {
                    console.log("single element found with the single")
                    //generating the string representation of the element.
                    let elementStr = $(incompletedElement).prop('outerHTML');
                    findElementByCode(elementStr, errorCodeId);
                } else {
                    console.log("multiple element found with the attrcss selector")
                    var accordionSubId = "fina11y-sub-category-error-id-" + errorCodeId.replace("fina11y-error-code-id-", "")
                    $("#" + accordionSubId).attr("style", "background-color:#aba500 !important");
                }
            }
        }
    }
}

// to generate attribute selector with tagname and attribute name value pair.( used with incomeplete element case)
function attributeSelectorGenerator(tagName, attrMap, hasClass) {
    let attrSelector = "";
    if (hasClass) {
        for (const [key, value] of attrMap.entries()) {
            attrSelector = attrSelector + '[' + key + '="' + value + '"]';
        }
        return tagName + attrSelector;
    } else {
        for (const [key, value] of attrMap.entries()) {
            attrSelector = attrSelector + '[' + key + '="' + value + '"]';
        }
        return tagName + ":not([class])" + attrSelector;
    }
}


// text box validations.

// clearing the data in the textbox on click [manual added error]
$(document).on('click', 'pre[id^="fina11y-manual-error-"]', function (evt) {

    if ($(evt.target).html() === "Enter category") {
        console.log(evt.target)
        $(evt.target).html("");
    } else if ($(evt.target).html() === "Enter subCategory") {
        $(evt.target).html("");
    } else if ($(evt.target).html() === "Enter error code here") {
        $(evt.target).html("");
    } else if ($(evt.target).html() === "Enter remedy Here") {
        $(evt.target).html("");
    } else if ($(evt.target).html() === "Add remarks") {
        $(evt.target).html("");
    }
});

// validating every text box having a value.
function manualAddErrorTxtBoxValidation() {
    let category = $('#fina11y-manual-error-cat').html();
    let subCategory = $('#fina11y-manual-error-sub-cat').html();
    let errorCode = $('#fina11y-manual-error-code').html();
    let errorRemedy = $('#fina11y-manual-error-remedy').html();
    let errorRemarks = $('#fina11y-manual-error-remarks').html();

    if (category === "" || category === "Enter category") {
        $('#valid-error-txt').attr('style', 'display:block !important');
        $('#valid-error-txt').html("Enter a valid category.");
        return false;
    } else if (subCategory === "" || subCategory === "Enter subCategory") {
        $('#valid-error-txt').attr('style', 'display:block !important');
        $('#valid-error-txt').html("Enter a valid SubCategory");
        return false;
    } else if (errorCode === "" || errorCode === "Enter error code here") {
        $('#valid-error-txt').attr('style', 'display:block !important');
        $('#valid-error-txt').html("Enter a valid Error Code Snippet");
        return false;
    } else if (errorRemedy === "" || errorRemedy === "Enter remedy Here") {
        $('#valid-error-txt').attr('style', 'display:block !important');
        $('#valid-error-txt').html("Enter a valid Remedy");
        return false;
    } else if (errorRemarks === "" || errorRemarks === "Add remarks") {
        $('#valid-error-txt').attr('style', 'display:block !important');
        $('#valid-error-txt').html("Enter a valid Remarks");
        return false;

    } else {
        return true;
    }
}

// toggle show hide the error indicating div
$(document).on('mouseenter', 'div[id^="fina11y-error-highlighting-main-div-"]',function(evt){
    // $(evt.target).attr('style','display:none !important;');
    $(evt.target).hide();
});
$(document).on('mouseleave', 'div[id^="fina11y-error-highlighting-main-div-"]',function(evt){
    // $(evt.target).attr('style','display:block !important;');
    $(evt.target).show(2000);
});