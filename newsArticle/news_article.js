var xhr = new XMLHttpRequest();

var url = "news_article.json"; 
xhr.open("GET", url, true);


xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = JSON.parse(xhr.responseText);

        var output = "<h2>News Articles</h2>";
        articles.forEach(function(article) {
            output += "<h3>" + article.title + "</h3>";
            output += "<p><strong>Author:</strong> " + article.author + "</p>";
            output += "<p>" + article.content + "</p>";
        });

        document.getElementById("newsContainer").innerHTML = output;
    } else {
        console.error("Error fetching news articles: ", xhr.statusText);
    }
};

xhr.send();
