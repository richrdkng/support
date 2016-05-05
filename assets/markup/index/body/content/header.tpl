<nav class="container" role="navigation">
    <span class="support-label">{{ text.support }}</span>

    <section class="row">
        <div class="col-md-3">
            <span class="logo"></span>
        </div>

        <div id="name" class="col-md-6">
            <span class="name">{{ document.author }}</span>
        </div>

        <div id="contact-top" class="col-md-3">
            {% for top in contact.top %}
                <span class="icon-{{ top.icon.type }}"></span>
            {% endfor %}
        </div>
    </section>
</nav>
