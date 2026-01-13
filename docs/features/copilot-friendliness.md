# Copilot Friendliness

- xxx

## Brainstorming

- What could we do to make this easily digestible for our Copilot / AI?
    - Comments, comments, comments. Tell the AI all of the unstated assumptions and goals you have. Mixing English and code in the training data helps the AI learn the relationship.
- We're going to have documentation, explaining the context of the code. That'll be as XML comments right at the public API nodes, as well as prose documentation (markdown), which will reference in code snippet examples. Can your engine intake such mixed-media inputs?
    - yes
    - So the following is outdated content, but the format is very much what we'll have: 
https://crispy-adventure-kqje5zq.pages.github.io/architecture.html. 
Can this be fed in? Like directly, without converting to anything?
        -  Can this be fed in?
Robust libraries exist for ingesting all sorts of standard formats like HTML, Markdown, JSON, XML, PDF, Word, code, etc. Format is no problem. The thing to keep in mind is that a code-generating model will be given English prompts describing what the user wants and will be expected to output code that implements the user's intent. To make this happen, we need training data that helps the model learn this English-code association. So in the GitHub document you linked, it would be better if the text that describes the code examples is clearly grouped together with the code and separated from everything else. This grouping can be done anyway way that's convenient, such as the HTML h2 header "Singleton Classes for Blocks" containing the text and matching code. If this HTML section contains other text that doesn't describe the code example, this makes it harder for us to process it into English-code training examples. It's this pairing that matters, not the exact mechanism by which the code and its description are paired. Make sense?
 
- Are we working on Copilot functionality that I can ask to create common programming tasks? Like ChatGPT, but who is aware of the IG-XL specifics, and can create meaningful test & dsp code?
    - No. We were told by Apps that automating tedious processes like characterization is more important than generating code. Also, we lacked training data. I expect this reference architecture will be a big enabler so we can finally progress on code generation.
- Are we considering VS integrated functionality that can help me code right in the IDE? Like GH Copilot, but with awareness of our IG-XL knowledge and not only limited to the code it sees in my VS project?
    - Yes, this is a prime candidate for C# test code generation use mode.
- We may have some degrees of freedom to make those things potentially easier. Or if it is only to avoid making them extra-hard. And we're just about to get started, so now would be the right time to consider ...
    - In a lot of cases, if the text description is short, comments in the code might be the easiest and most robust way to associate the code with a description.


