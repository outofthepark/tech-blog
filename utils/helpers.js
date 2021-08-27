const marked = require("marked");

module.exports = {
    format_html: body => {
      const html_body = marked(body);
      return html_body;
    },
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
          ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    }
}