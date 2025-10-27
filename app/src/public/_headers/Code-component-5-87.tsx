# Luna Super Machine - Cloudflare Pages Headers
# Security and performance headers

/*
  # Security Headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  
  # Content Security Policy
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://images.unsplash.com; frame-src https://www.youtube.com;
  
  # Cache Control for static assets
  Cache-Control: public, max-age=31536000, immutable

# Cache control for HTML
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Cache control for robots.txt
/robots.txt
  Cache-Control: public, max-age=86400

# Block common spam paths
/adaniairports
  X-Robots-Tag: noindex, nofollow
  
/adanidigitallabs
  X-Robots-Tag: noindex, nofollow
  
/alvertoninsurancebrokers
  X-Robots-Tag: noindex, nofollow
  
/americanelectriclighting
  X-Robots-Tag: noindex, nofollow
  
/bain
  X-Robots-Tag: noindex, nofollow
  
/bamconstructie
  X-Robots-Tag: noindex, nofollow
  
/banktel
  X-Robots-Tag: noindex, nofollow
  
/bettermentforbusiness
  X-Robots-Tag: noindex, nofollow
  
/bohcard
  X-Robots-Tag: noindex, nofollow
  
/bosta-beto
  X-Robots-Tag: noindex, nofollow
  
/brioni
  X-Robots-Tag: noindex, nofollow
  
/carmax
  X-Robots-Tag: noindex, nofollow
  
/certinia
  X-Robots-Tag: noindex, nofollow
  
/ciassante
  X-Robots-Tag: noindex, nofollow
  
/ciinvestment
  X-Robots-Tag: noindex, nofollow
  
/columbiagas
  X-Robots-Tag: noindex, nofollow
  
/crhcom
  X-Robots-Tag: noindex, nofollow
  
/donedealpro
  X-Robots-Tag: noindex, nofollow
  
/endeavortitle
  X-Robots-Tag: noindex, nofollow
  
/equipyourlife
  X-Robots-Tag: noindex, nofollow
  
/fedpoint
  X-Robots-Tag: noindex, nofollow
  
/feitest
  X-Robots-Tag: noindex, nofollow
  
/fpsnet
  X-Robots-Tag: noindex, nofollow
  
/genestra
  X-Robots-Tag: noindex, nofollow
  
/giantcarlisle
  X-Robots-Tag: noindex, nofollow
  
/haakeins
  X-Robots-Tag: noindex, nofollow
  
/hrctitle
  X-Robots-Tag: noindex, nofollow
  
/investmentplan
  X-Robots-Tag: noindex, nofollow
  
/iovation
  X-Robots-Tag: noindex, nofollow
  
/keroco
  X-Robots-Tag: noindex, nofollow
  
/longevityanalysis
  X-Robots-Tag: noindex, nofollow
  
/marketwatch
  X-Robots-Tag: noindex, nofollow
  
/mercedesbenzstadium
  X-Robots-Tag: noindex, nofollow
  
/mercurypharma
  X-Robots-Tag: noindex, nofollow
  
/mmcgns
  X-Robots-Tag: noindex, nofollow
  
/mmiproductsinc
  X-Robots-Tag: noindex, nofollow
  
/modelcalc
  X-Robots-Tag: noindex, nofollow
  
/monitormyidentity
  X-Robots-Tag: noindex, nofollow
  
/mybenefitseveryday
  X-Robots-Tag: noindex, nofollow
  
/myinlandnwportal
  X-Robots-Tag: noindex, nofollow
  
/nbg-alerts
  X-Robots-Tag: noindex, nofollow
  
/pipevaluetool
  X-Robots-Tag: noindex, nofollow
  
/qpost
  X-Robots-Tag: noindex, nofollow
  
/ryerson
  X-Robots-Tag: noindex, nofollow
  
/secure-fkc
  X-Robots-Tag: noindex, nofollow
  
/slice
  X-Robots-Tag: noindex, nofollow
  
/smarties
  X-Robots-Tag: noindex, nofollow
  
/softexpedia
  X-Robots-Tag: noindex, nofollow
  
/strongroomsolutions
  X-Robots-Tag: noindex, nofollow
  
/taadvantage
  X-Robots-Tag: noindex, nofollow
  
/taofthevalley
  X-Robots-Tag: noindex, nofollow
  
/telefonica
  X-Robots-Tag: noindex, nofollow
  
/thermoclick
  X-Robots-Tag: noindex, nofollow
  
/torrentcorp
  X-Robots-Tag: noindex, nofollow
  
/transunionhpi
  X-Robots-Tag: noindex, nofollow
  
/truvalidate
  X-Robots-Tag: noindex, nofollow
  
/univera
  X-Robots-Tag: noindex, nofollow
  
/valeincopes
  X-Robots-Tag: noindex, nofollow
  
/viva-cleaning
  X-Robots-Tag: noindex, nofollow
  
/vyopta
  X-Robots-Tag: noindex, nofollow
  
/whymoistureshield
  X-Robots-Tag: noindex, nofollow
  
/wmmercer
  X-Robots-Tag: noindex, nofollow
  
/wwwinc
  X-Robots-Tag: noindex, nofollow
  
/xn--cr-w9a
  X-Robots-Tag: noindex, nofollow
  
/xn--cr-zgb
  X-Robots-Tag: noindex, nofollow
  
/xn--rh-dma
  X-Robots-Tag: noindex, nofollow
  
/zatca
  X-Robots-Tag: noindex, nofollow
  
/cycoloy
  X-Robots-Tag: noindex, nofollow
