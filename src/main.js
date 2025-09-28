import $ from "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "./style.css";

// Make jQuery available globally for jQuery UI
window.jQuery = window.$ = $;

// Import jQuery UI after making jQuery global
import("jquery-ui-dist/jquery-ui").then(() => {
  console.log("jQuery version:", $.fn.jquery);
  console.log("jQuery UI loaded:", typeof $.fn.accordion);
});


$(() => {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: 0,
  });

  // TABS
  $("#tabs").tabs();

  // DIALOG
  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    width: 380,
  });
  $("#openDialog").on("click", () => $("#dialog").dialog("open"));

  // DATEPICKER
  $("#dateInput").datepicker({
    dateFormat: "yy-mm-dd",
    showAnim: "fadeIn",
  });

  // AUTOCOMPLETE
  const cities = [
    "Kuwait City",
    "Dubai",
    "Riyadh",
    "Doha",
    "Manama",
    "Jeddah",
    "Abu Dhabi",
  ];
  $("#city")
    .autocomplete({ source: cities, minLength: 0 })
    .on("focus", function () {
      $(this).autocomplete("search", $(this).val());
    });

  // DRAGGABLE
  $("#dragMe").draggable({ containment: "window" });

  // SORTABLE
  // NOTE: your <li> items don’t have data-id attributes, so this would log [undefined,...].
  // Either remove the toArray line, or add data-id attributes (see section 4 below).
  $("#sortable").sortable({
    placeholder: "ui-state-highlight",
    update: function () {
      const order = $(this).sortable("toArray", { attribute: "data-id" });
      console.log("New order:", order);
    },
  });
});
