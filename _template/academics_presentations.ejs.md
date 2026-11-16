```{=html}
<div>
<% for (const item of items) { %>
  <div class="tabular">
    <div style="float: right; text-align: right; margin-left: 10px">
      <a href="https://en.wikipedia.org/wiki/<%- item.year %>" class="tabular-year">
        <%- item.year %>
      </a>
      <div>
        <% if (item.video) { %>
          <a href="<%- item.video %>" aria-label="Video">
            <span class="fa fa-video-camera tabular-icon" title="video: <%- item.video %>"></span>
          </a>
        <% } else { %>
          <span class="tabular-icon">&nbsp;</span>
        <% } %>
      </div>
      <span class="tabular-type"><%- item.type %></span>
    </div>
    <div>
      <span class="tabular-first-line"><%- item.title %></span>
    </div>
    <div>
      <span class="tabular-second-line"><%- item.occasion %></span>
    </div>
    <div>
      <span class="tabular-third-line"><%- item.location %></span>
    </div>
  </div>
<% } %>
</div>
```
