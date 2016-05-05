<section id="main" class="container" role="main">
    <section id="description" class="row">
        <p>{{ text.description }}</p>
    </section>

    {% for option in options %}
        <section class="row option-{{ option.type }}">
            <div class="col-md-2">
                <span class="icon-{{ option.icon.type }}"></span>
                <span class="icon-label">{{ option.icon.label }}</span>
            </div>
            <div class="col-md-4">{{ option.text }}</div>
            <div class="col-md-6">{{ option.content }}</div>
        </section>
    {% endfor %}

    <section id="thank-you" class="row">
        <p>{{ text["thank-you"] }}</p>
    </section>

    <section id="contact-bottom" class="row">
        {% for bottom in contact.bottom %}
            <span class="icon-{{ bottom.icon.type }}"></span>
        {% endfor %}
    </section>
</section>
