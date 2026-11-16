```{=html}
<div>
  <% for (const publication of items) { %>
    <div class="tabular">
      <div style="float: right; text-align: right; margin-left: 10px">
        <div>
          <a href="https://en.wikipedia.org/wiki/<%- publication.year %>" class="tabular-year"><%- publication.year %></a>

          <div>
            <% if (publication.video) { %>
              <a href="<%- publication.video %>" aria-label="Video">
                <span class="fa fa-video-camera tabular-icon" title="video: <%- publication.video %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.code) { %>
              <a href="<%- publication.code %>" aria-label="Code">
                <span class="fa fa-code tabular-icon" title="code: <%- publication.code %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.web) { %>
              <a href="<%- publication.web %>" aria-label="Web page">
                <span class="fa fa-cloud tabular-icon" title="web: <%- publication.web %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.doi) { %>
              <a href="https://doi.org/<%- publication.doi %>" aria-label="DOI">
                <span class="fa fa-link tabular-icon" title="doi: <%- publication.doi %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.bib) { %>
              <a href="<%- publication.bib %>" aria-label="BibTeX">
                <span class="fa fa-book tabular-icon" title="bib: <%- publication.bib %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.poster) { %>
              <a href="<%- publication.poster %>" aria-label="Poster">
                <span class="fa fa-file-image tabular-icon" title="poster: <%- publication.poster %>"></span>
              </a>
            <% } %>
            <% if (publication.pdf) { %>
              <a href="<%- publication.pdf %>" aria-label="PDF">
                <span class="fa fa-file-pdf tabular-icon" title="pdf: <%- publication.pdf %>"></span>
              </a>
            <% } %>
          </div>
          <% if (publication.annotations) { %>
            <span class="publication-annotation"><%- publication.annotations %></span>
          <% } else { %>
            <span class="tabular-type"><%- publication.type %></span>
          <% } %>
        </div>
      </div>
      <div>
        <% if (publication.pdf) { %>
          <a href="<%- publication.pdf %>" class="tabular-first-line"><%- publication.title %></a>
        <% } else if (publication.poster) { %>
          <a href="<%- publication.poster %>" class="tabular-first-line"><%- publication.title %></a>
        <% } else { %>
          <span class="tabular-first-line"><%- publication.title %></span>
        <% } %>
      </div>
      <div>
        <span class="tabular-second-line"><%- publication.authors.join(", ") %></span>
      </div>
      <div>
        <span class="tabular-third-line"><%- publication.venue %></span>
      </div>
    </div>
  <% } %>
</div>
```
