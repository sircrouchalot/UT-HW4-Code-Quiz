$(document).ready(function () {
  // console.log( "ready!" );
  var tableBodyEl = $("#tableBody");

  var scores = [];

  $.get("/api/highscores", function (data) {
    scores = data;
    initializeRows();
  });

  function initializeRows() {
    var rowsToAdd = [];
    for (i = 0; i < scores.length; i++) {
      var newRow = createNewRow(i + 1, scores[i]);
      tableBodyEl.append(newRow);
    }
  }

  function createNewRow(num, scores) {
    var newScoreRow = $(
      [
        "<tr>",
        "<th scope='row'>",
        num,
        "</th>",
        "<td>",
        scores.initials,
        "</td>",
        "<td>",
        scores.score,
        "</td>",
        "</tr>",
      ].join("")
    );
    return newScoreRow;
  }
});
