---
title: "Now"
description: "What I'm currently up to"
permalink: /now
layout: post
sub-navs:
 - "<a href='/' title='home' rel='author'>Jonathan&nbsp;Haas</a>"
 - "<a href='/about' title='About'>About</a>"
 - "<a href='/blog' title='Blog'>Blog</a>"
---

{%- if page.now -%}
{%- for post in site.posts -%}
	{%- if post.now -%}
		{%- assign now-description = post.description -%}
		{%- break -%}
	{%- endif -%}
{%- endfor -%}
{%- endif -%}


{%- for post in site.posts -%}

{%- if post.now -%}

{{ post.content }}

{%- break -%}

{%- endif -%}

{% endfor %}


## Previously Now

{% assign counter = 0 %}

{% for post in site.posts %}

{%- if post.now -%}

{%- assign counter = counter | plus: 1 -%}

{% if counter > 1 %}

{%- include blog-listing.html -%}

{% endif %}


{%- endif -%}
{%- endfor -%}




