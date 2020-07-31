  const comingFromPost = document.referrer; 

  const allPosts = 
    [{%- for post in site.posts -%}
      "{{ site.url }}{{ post.url }}"{%- unless post.previous == nil -%},{%- endunless -%}
    {%- endfor -%}];
  
  const allPostsFiltered = allPosts.filter(URLfilter);
  
  function URLfilter(value) {
    return value !== comingFromPost;
  }

  function linkToRandomBlogPost() {
      const randomPostLink = allPostsFiltered[Math.floor(Math.random() * allPostsFiltered.length)];
      return randomPostLink;
  }

  location.replace(linkToRandomBlogPost())