/*
  @author AswinTA
 */

var fina11yErrorDomElement = '<div id="fina11y-error-highlighting-main-div" class="tota11y tota11y-annotation-contrast tota11y-label tota11y-label-error"> <span class="tota11y-label-error-icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851 c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356 C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904 c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521 c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18 c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019 c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"> </path> </svg> </span> <span class="tota11y-label-content"><div class="tota11y-label-text">Error</div><div class="tota11y-label-help"> (<a class="tota11y-label-link" href="#">?</a>)</div><div class="tota11y-label-detail"> <span class="fina11y-annotation-error-name-db">This contrast is insufficient at this size.</span> <textarea id="tota11y-error-suggest-txtarea" class="tota11y-error-suggest-txtarea" name="" id="" cols="30" rows="10" placeholder="Enter suggestion Here......" style=" background-color: #a8a8a8 !important;padding: 5px 5px 5px 5px !important; margin-top: 5px !important;"></textarea> <hr> <br><button id="fina11y-error-submit-btn" class="fina11y-bot fina11y-bot-red">Issue</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Not an Issue</button></div></span></div>';
var fina11yErrorHighlightingElementAll = '<div id="fina11y-error-highlighting-main-div" class="fina11y-error-highlighting-main-div tota11y tota11y-annotation-contrast tota11y-label tota11y-label-error"> <span class="tota11y-label-error-icon"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851 c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356 C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904 c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521 c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18 c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019 c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"> </path> </svg> </span> <span class="tota11y-label-content"> <div class="tota11y-label-text">Error</div></span> </div>';
var fina11yParentLiElement;
var prevErrorCount = 0;
var $ = jQuery;
var elementHasAnyClass = false;
var currentElement;

// script.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.8/socket.io.min.js";
// socket init
// connecting to ip address
var socket = io.connect('https://192.168.100.212:7444');
// socket.on('connect',setTimeout(10000), function () {

// initializing socket connecton
socket.on('connect', function () {
    console.log(socket);
    // socket.send('2nd app connected!');
    // sending a messege to the socket server
    socket.emit("test", "tota11y connected")
    console.log("========");


    // receiving messege from the server which is sent by the socket.send()
    socket.on('message', function (data) {
        // console.log("receiving")
        alert(data);
        console.log('value===' + data);

    });

    // receiving messege from the server which is sent by the emit()
    socket.on('testEmit', function (subCategory) {
        console.log('socket data ==' + subCategory)



        // to remove previously generated accordions
        document.querySelectorAll('.accordion.js-accordion').forEach(function (element) {
            element.remove();
        });

        var accordion = $.parseHTML(' <div class="accordion js-accordion"></div>');
        var accordionMainWrapper = $.parseHTML('<div class="accordion__item js-accordion-item active"><div class="accordion-header js-accordion-header" id="fina11y-error-category-id-8">main title</div><div class="accordion-body js-accordion-body" style="display: block;"><div class="accordion-body__contents">inside main panel 1</div><div class="accordion js-accordion"></div></div></div>');


        console.log("ajax call");
        // getting the current url 
        let currentUrl = window.location.href;
        

        // http://192.168.35.31:8005/aitoolfilter?url=https://www.typescriptlang.org/&aicate=altinfo


        // ajax call to fetch the data
        $.ajax({
            type: "GET", //rest Type
            url: "http://192.168.35.31:8005/aitoolfilter?url=https://www.typescriptlang.org/&aicate=" + subCategory,
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                // console.log(response);
                var errorCount = 0;
                $.each(response, function (index, errorObj) {
                    // console.log(errorObj)
                    var accordionSubPanel = $.parseHTML('<div class="accordion__item js-accordion-item active" id="fina11y-error-code-snippet-id-36"><div class="accordion-header js-accordion-header" id="fina11y-sub-category-error-id-36">sub panel title</div><div class="accordion-body js-accordion-body" style="display: none; height: 103px; padding-top: 10px; margin-top: 0px; padding-bottom: 10px; margin-bottom: 0px;"><div class="accordion-body__contents"><div class="fina11y-code-editor"><pre class="language-markup fina11y-error-code-snippet" contenteditable="true" id="fina11y-error-code-id-36"> prblm source code here</pre><button id="fina11y-error-submit-btn" class="fina11y-bot fina11y-bot-red">Issue</button> <button id="fina11y-not-an-issue-btn" class="fina11y-bot fina11y-bot-green">Not an Issue</button></div></div></div></div>');
                    $(accordionSubPanel).attr("id", "fina11y-error-code-snippet-id-" + errorObj.id);
                    $(accordionSubPanel).find("#fina11y-sub-category-error-id-36").attr("id", "fina11y-sub-category-error-id-" + errorObj.id);
                    $(accordionSubPanel).find("pre[id=fina11y-error-code-id-36]").attr("id", "fina11y-error-code-id-" + errorObj.id);
                    $(accordionSubPanel).find(".fina11y-error-code-snippet").text(errorObj.prbmSrc);
                    $(accordionSubPanel).find(".accordion-header").html(errorObj.testCase);
                    $(accordionMainWrapper).find(".accordion.js-accordion").append(accordionSubPanel);
                    errorCount++;
                    // console.log(errorCount)
                });

                $(accordion).append(accordionMainWrapper);
                $(".tota11y-info-errors").append(accordion);
                //appending error count text to the tools main body.
                $(".tota11y-info-error-count").text(errorCount);
                // prevErrorCount = errorCount;
            }
        });


    })

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
    link.href = "https://cdn.jsdelivr.net/gh/AswinTA/HighlighterA11y@1.0.2/finallycss.css";
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
        jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
        document.head.appendChild(jQueryScript);

        // jquery.src = "https://code.jquery.com/jquery-3.4.1.min.js";
        // // console.log(document.getElementsByTagName("head")[0]);
        // document.getElementsByTagName("head")[0].appendChild(jquery);

    } else
        console.log(jQuery.fn.jquery);

    createfina11yBody();

}

// To Generate Tool body
function createfina11yBody() {
    // $.noConflict();
    $('body').append(' <div class="tota11y tota11y-info" id="moveable" tabindex="-1"> <header class="tota11y-info-title">Test TOoL<span class="tota11y-info-controls"><a aria-label="Close info panel" href="#" class="tota11y-info-dismiss-trigger">×</a></span></header> <div id="moveableBody" class="tota11y-info-body"> <div class="tota11y-info-sections"> <div class="tota11y-info-section active"> <ul class="tota11y-info-errors"> </ul> </div></div><ul role="tablist" class="tota11y-info-tabs"> <li class="tota11y-info-tab active"><a class="tota11y-info-tab-anchor" href="#"><span class="tota11y-info-tab-anchor-text">Errors</span> <div class="tota11y-info-error-count">7</div></a></li></ul> </div></div>');
    var a11yscript = document.createElement("script");
    var imported = document.createElement('script');
    // creating socketio cdn script 
    var socketScript = document.createElement('script');
    imported.type = "text/javascript";
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
    a11yscript.src = "https://cdn.jsdelivr.net/gh/AswinTA/HighlighterA11y@1.0.2/finallyUi.js";

    imported.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.8/socket.io.min.js';
    // document.head.appendChild(imported);
    document.getElementsByTagName("head")[0].appendChild(imported);
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
            // adding border to the current element for highlighting it.

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

function getElementsLineNumber(currentElement) {
    $(currentElement).click(function () {
        // console.log($(currentElement).index(this));
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


        if ($(attrCount).length > 0)

            // extract all attributes and its values.
            var attributeList = extractAllAttributesAndValues(fina11yCurrentElement);

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
    var errorId = $(this).attr('id').replace("fina11y-error-submit-btn-", "");
    var errorSolution = $("#tota11y-error-suggest-txtarea").val();
    var jsonData = new Object();
    jsonData.id = errorId;
    jsonData.errorFix = errorSolution;
    $.ajax({
        url: "http://localhost:8877/saveFixToDb",
        dataType: "json",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(jsonData),
        success: function (response) {
            // adding completed badge to the tools main body .
            $(fina11yParentLiElement).find(".tota11y-info-error-title").append("<span class='fina11y-completed-badge'>completed</span>");

            // disabling the 2 button.
            $("[id^=fina11y-not-an-issue-btn]").prop('disabled', true);
            $("[id^=fina11y-not-an-issue-btn]").css('cursor', 'not-allowed');

            $("[id^=fina11y-error-submit-btn]").prop('disabled', true);
            $("[id^=fina11y-error-submit-btn]").css('cursor', 'not-allowed');
        },
        error: function (err) {
            // console.log(err);
        }
    })
});


// click event for indicating no issue for that error
$(document).on('click', '[id^=fina11y-not-an-issue-btn]', function (event) {
    var currentBtn = $(this);
    // getting the error id from button.
    var errorId = $(this).attr('id').replace("fina11y-not-an-issue-btn-", "");
    var jsonData = new Object();
    jsonData.id = errorId;
    jsonData.errorFix = "Not an Issue";
    $.ajax({
        url: "http://localhost:8877/saveFixToDb",
        dataType: "json",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(jsonData),
        success: function (response) {
            // adding completed badge to the tools main body .
            $(fina11yParentLiElement).find(".tota11y-info-error-title").append("<span class='fina11y-completed-badge'>completed</span>");
            // disabling the 2 buttons.
            $("[id^=fina11y-not-an-issue-btn]").prop('disabled', true);
            $("[id^=fina11y-not-an-issue-btn]").css('cursor', 'not-allowed');

            $("[id^=fina11y-error-submit-btn]").prop('disabled', true);
            $("[id^=fina11y-error-submit-btn]").css('cursor', 'not-allowed');
        },
        error: function (err) {
            // console.log(err);
        }
    })
});

// to extract error sub category from the main category
$(document).on('click', '.tota11y-info-error-trigger', function (event) {
    var categoryLi = $(this);
    // console.log("cat li = " + categoryLi);
    // alert("hi");
    // console.log("hi");
    var categoryId = $(this).attr('id').replace("tota11y-category-error-id-", "");;

    // console.log(categoryId);
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
            // console.log("sub category = " + response);


            // console.log(response);
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
    })

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

            $(document).on('click', '[id^=fina11y-sub-category-error-id-]', function () {


                // clearing the highlighting elements [orgg]
                $('[id^=fina11y-error-highlighting-main-div-]').remove();
                // $('*').removeClass("tota11y-add-bg-boder");

                let currentElementWithHighlightingBorder = document.querySelectorAll(".tota11y-add-bg-boder");
                for (x of currentElementWithHighlightingBorder) {
                    console.log("--------------------------")
                    console.log(x.classList.length)
                    if (x.classList.length === 1) {
                        console.log("only one class is present.")
                        x.removeAttribute("class");
                    } else {
                        $('*').removeClass("tota11y-add-bg-boder");
                    }
                    console.log("--------------------------")
                }

                let errorCodeId = $(this).parent().find(".accordion-body.js-accordion-body").find("pre.language-markup.fina11y-error-code-snippet")[0];
                errorCodeId = $(errorCodeId).attr('id').replace("fina11y-error-code-id-", "");
                // let errorCode = $(this).parent().find(".accordion-body.js-accordion-body").find("pre.language-markup.fina11y-error-code-snippet")[0].innerText;
                let errorCode = $("pre#fina11y-error-code-id-" + errorCodeId)[0].innerText;


                findElementByCode(errorCode, errorCodeId);

                accordion.toggle($(this));
            });

            $(document).on('click', '[id^=fina11y-error-category-id-]', function () {
                // alert("clicked");

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

            // if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {


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
// collapse test//


// function to find and highlight element
function findElementByCode(domElement, $errorCodeId) {

    $errorElement = $(domElement);

    //extracting id from element
    $errorElementId = $(domElement).attr('id');

    // extracting class names from element
    $errorElementClassNames = $($errorElement).attr('class');

    //extracting all attributes and values from element
    $errorElementAttributesList = extractAllAttributesAndValues($errorElement);

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

// end


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

    window.scrollTo(elementPosition.left, (elementPosition.top)-100);

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
        var elementSelector = tagName + attrNameAndValue;
        console.log("ELEMENT SELECTOR--->>");
        console.log(elementSelector);
        var finalElement = $(elementSelector);

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
            })



            var elementPosition = $(finalElement).offset();
            // check for the position is 0,0
            if (elementPosition.left === 0 && elementPosition.top === 0) {
                $(finalElement).show();
                elementPosition = $(finalElement).offset();
            }
            createErrorHighlightingElementOverDom(finalElement, elementPosition, errorCodeId);
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

            console.log("single element found without class and id ");
        }


    }

}



