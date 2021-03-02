$(function() {
  var client = ZAFClient.init();
  client.invoke('resize', { width: '100%', height: '500px' });

  client.get('ticket.requester.id').then(
      function(data) {
          var user_id = data['ticket.requester.id'];
          requestUserInfo(client, user_id);
      }
  );
});

function requestUserInfo(client, id) {
var settings = {
  url: '/api/v2/users/' + id + '.json',
  type:'GET',
  dataType: 'json',
};

client.request(settings).then(
  function(data) {
    showInfo(data);
  },
  function(response) {
    showError(response);
  }
);
}

function readJson(Choice) {
 addTags('Choice');
 
}

function showInfo(data) {
var requester_data = {
  'name': data.user.name,
  'tags': data.user.tags,
  'created_at': formatDate(data.user.created_at),
  'last_login_at': formatDate(data.user.last_login_at)
};

var source = $("#requester-template").html();
var template = Handlebars.compile(source);
var html = template(requester_data);
$("#content").html(html);
}

function formatDate(date) {
var cdate = new Date(date);
var options = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
date = cdate.toLocaleDateString("en-us", options);
return date;
}

function showError(response) {
var error_data = {
  'status': response.status,
  'statusText': response.statusText
};
var source = $("#error-template").html();
var template = Handlebars.compile(source);
var html = template(error_data);
$("#content").html(html);
}

function showChoice() {
  var source = $("#choice-template").html();
  var template = Handlebars.compile(source);
  $("#Route").html(template);
 }

function showActive(Choice) {

  if (Choice == "BugReport") {
  showBugReport(Choice);
  } else {
  addTags(Choice);
  var data = {'Question': Choice};
  var source = $("#activestream-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#Route").html(html);
  }
}

function showBugReport(Choice) {
  addTags(Choice);
  client.invoke('resize', { width: '320', height: '4000px' });
  var source = $("#bugreport-template").html();
  var template = Handlebars.compile(source);
  $("#Route").html(template);
}

  function addTags(Tag) {
    client.invoke("ticket.tags.add", Tag);
}

/*!
 * jQuery based plugin - Tree View
 * Author : vsvvssrao (https://github.com/vsvvssrao)
 * Demo link : https://vsvvssrao.github.io/TreeView/
 * Date: Sat Oct 26 2019
 */
(function ($) {
  $.fn.tree = function (options) {
    var settings = $.extend({
      data: function () { },
      onDemandData: function () { }
    }, options);
    function GetData() {
      return settings.data();
    }
    var _data = GetData();
    function createTree(data, ulClassName) {
      var parentUl = document.createElement('ul');
      parentUl.className = ulClassName;
      data.forEach(element => {
        var liElement = document.createElement('li');
        liElement.setAttribute('data-hasChild', element.hasChild);
        liElement.setAttribute('data-id', element.id);
        liElement.setAttribute('data-isLoaded', false);
        if (element.hasChild) {
          var spanElement = document.createElement('span');
          spanElement.innerHTML = element.displayName;
          spanElement.className = 'tv-caret';
          liElement.append(spanElement);
        } else {
          liElement.innerHTML = element.displayName;
        }
        parentUl.append(liElement);
      });
      return parentUl;
    }
    this.append(createTree(_data, 'tv-ul'));
    $(this).off('click','.tv-caret').on('click','.tv-caret', function () {
      var $this = $(this);
      if (!$this.parent('li').data("isloaded")) {
        // fetch data
        var a = createTree(settings.onDemandData(), 'tv-nested');
        // Append the data
        $this.parent('li').append(a);
        // Set isloaded to true
        $this.parent('li').data("isloaded",true);
      }
      $this.parent('li').find('.tv-nested').toggleClass("active");
      $this.toggleClass("tv-caret-down");

    })
    return this;
  };
}(jQuery));