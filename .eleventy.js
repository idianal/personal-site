const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const markdownItSup = require("markdown-it-sup");
const markdownIt = require("markdown-it");
const metadata = require("./_data/metadata.json");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("dateString", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" })
                .toFormat("yyyy-LL-dd");
    });

    eleventyConfig.addFilter(
            "findElement",
            (array, propToCompare, valToCompare, propToReturn) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element[propToCompare] === valToCompare)
                return element[propToReturn];
        }
    });

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(feedPlugin, {
        type: "rss",
        outputPath: metadata.feedUrl,
        collection: { name: "post", limit: 10 },
        metadata: {
            language: "en",
            title: metadata.title,
            subtitle: metadata.description,
            base: metadata.baseUrl,
            author: { name: metadata.authorName, email: metadata.authorEmail }
        }
    });

    eleventyConfig.setTemplateFormats([ "html", "liquid", "md", "njk" ]);

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.setLibrary(
            "md",
            markdownIt({ html: true, typographer: true })
        .use(markdownItSup));
};
