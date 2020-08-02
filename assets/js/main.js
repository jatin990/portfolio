(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $("#mobile-nav-toggle").hide();
      // $("body").hide();
      // $('.load').delay(450000).fadeOut('slow');
      // $('body').delay(45).css({
      //   'overflow': 'visible'
      // });
    });
    
 new WOW().init();

 // Initiate superfish on nav menu
 $('.nav-menu').superfish({
   animation: {
     opacity: 'show'
   },
   speed: 400
 });

 // Mobile Navigation
 if ($('#nav-menu-container').length) {
   var $mobile_nav = $('#nav-menu-container').clone().prop({
     id: 'mobile-nav'
   });
   $mobile_nav.find('> ul').attr({
     'class': '',
     'id': ''
   });
   $('body').append($mobile_nav);
   $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
   $('body').append('<div id="mobile-body-overly"></div>');
   $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

   $(document).on('click', '.menu-has-children i', function (e) {
     $(this).next().toggleClass('menu-item-active');
     $(this).nextAll('ul').eq(0).slideToggle();
     $(this).toggleClass("fa-chevron-up fa-chevron-down");
   });

   $(document).on('click', '#mobile-nav-toggle', function (e) {
     $('body').toggleClass('mobile-nav-active');
     $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
     $('#mobile-body-overly').toggle();
   });

   $(document).click(function (e) {
     var container = $("#mobile-nav, #mobile-nav-toggle");
     if (!container.is(e.target) && container.has(e.target).length === 0) {
       if ($('body').hasClass('mobile-nav-active')) {
         $('body').removeClass('mobile-nav-active');
         $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
         $('#mobile-body-overly').fadeOut();
       }
     }
   });
 } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
   $("#mobile-nav, #mobile-nav-toggle").hide();
 }

 // Header scroll class
 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
     $('#header').addClass('header-scrolled');
   } else {
     $('#header').removeClass('header-scrolled');
   }
 });

 if ($(window).scrollTop() > 100) {
   $('#header').addClass('header-scrolled');
 }

 // Smooth scroll for the menu and links with .scrollto classes
 $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     if (target.length) {
       var top_space = 0;

       if ($('#header').length) {
         top_space = $('#header').outerHeight();

         if (!$('#header').hasClass('header-scrolled')) {
           top_space = top_space - 20;
         }
       }

       $('html, body').animate({
         scrollTop: target.offset().top - top_space
       }, 1500, 'easeInOutExpo');

       if ($(this).parents('.nav-menu').length) {
         $('.nav-menu .menu-active').removeClass('menu-active');
         $(this).closest('li').addClass('menu-active');
       }

       if ($('body').hasClass('mobile-nav-active')) {
         $('body').removeClass('mobile-nav-active');
         $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
         $('#mobile-body-overly').fadeOut();
       }
       return false;
     }
   }
 });

 // Navigation active state on scroll
 var nav_sections = $('section');
 var main_nav = $('.nav-menu, #mobile-nav');
 var main_nav_height = $('#header').outerHeight();

 $(window).on('scroll', function () {
   var cur_pos = $(this).scrollTop();

   nav_sections.each(function () {
     var top = $(this).offset().top - main_nav_height,
       bottom = top + $(this).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       main_nav.find('li').removeClass('menu-active menu-item-active');
       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
     }
   });
 });

 //MrCZM

var textarea = $('.term');
var speed = 150; //Writing speed in milliseconds
var text = ' sh kirtikumar.sh && apt-get update';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        // textarea.css("color","#fff")
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 10);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {
          $(".load").fadeOut(1000);
          $(".afterload").fadeIn(3000);
          setTimeout(function(){
            window.scrollTo(0,0);  

          },500)

        }, 500);
      }
    },time);
}

var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
"KERNEL supported cpus:",
"  Intel GenuineIntel",
"  AMD AuthenticAMD",
"  Centaur CentaurHauls",
"e820: BIOS-provided physical RAM map:",
"BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
"ange=[0x00000000fed00000-0x00000000fed04000) (0MB)",
"efi: mem85: [Memory Mapped I/O  |RUN|  |  |  |   |  |  |  |UC] range=[0x00000000fed1c000-0x00000000fed20000) (0MB)",
"efi: mem86: [Memory Mapped I/O  |RUN|  |  |  |   |  |  |  |UC] range=[0x00000000fee00000-0x00000000fee01000) (0MB)",
"efi: mem87: [Memory Mapped I/O  |RUN|  |  |  |   |  |  |  |UC] range=[0x00000000ff000000-0x0000000100000000) (16MB)",
"SMBIOS 2.7 present.",
"DMI: ASUSTeK COMPUTER INC. N56VZ/N56VZ, BIOS N56VZ.217 05/22/2013",
"e820: update [mem 0x00000000-0x00000fff] usable ==> reserved",
"e820: remove [mem 0x000a0000-0x000fffff] usable",
"AGP: No AGP bridge found",
"e820: last_pfn = 0x42f200 max_arch_pfn = 0x400000000",
"MTRR default type: uncachable",
"MTRR fixed ranges enabled:",
"  00000-9FFFF write-back",
"  A0000-DFFFF uncachable",
"  E0000-FFFFF write-protect",
"MTRR variable ranges enabled:",
"  0 base 000000000 mask C00000000 write-back",
"  1 base 400000000 mask FE0000000 write-back",
"  2 base 420000000 mask FF0000000 write-back",
"  3 base 0E0000000 mask FE0000000 uncachable",
"  4 base 0D0000000 mask FF0000000 uncachable",
"  5 base 0CC000000 mask FFC000000 uncachable",
"  6 base 0CBC00000 mask FFFC00000 uncachable",
"  7 base 42F800000 mask FFF800000 uncachable",
"  8 base 42F400000 mask FFFC00000 uncachable",
"  9 base 42F200000 mask FFFE00000 uncachable",
"PAT configuration [0-7]: WB  WC  UC- UC  WB  WC  UC- UC  ",
"original variable MTRRs",
"reg 0, base: 0GB, range: 16GB, type WB",
"reg 1, base: 16GB, range: 512MB, type WB",
"reg 2, base: 16896MB, range: 256MB, type WB",
"reg 3, base: 3584MB, range: 512MB, type UC",
"reg 4, base: 3328MB, range: 256MB, type UC",
"reg 5, base: 3264MB, range: 64MB, type UC",
"reg 6, base: 3260MB, range: 4MB, type UC",
"reg 7, base: 17144MB, range: 8MB, type UC",
"reg 8, base: 17140MB, range: 4MB, type UC",
"reg 9, base: 17138MB, range: 2MB, type UC",
"total RAM covered: 16302M",
" gran_size: 64K 	chunk_size: 64K 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 128K 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 256K 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 512K 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 1M 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 2M 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 4M 	num_reg: 10  	lose cover RAM: 242M",
" gran_size: 64K 	chunk_size: 8M 	num_reg: 10  	lose cover RAM: 50M",
"*BAD*gran_size: 64K 	chunk_size: 16M 	num_reg: 10  	lose cover RAM: -12M",
"*BAD*gran_size: 64K 	chunk_size: 32M 	num_reg: 10  	lose cover RAM: -12M",
"*BAD*gran_size: 64K 	chunk_size: 64M 	num_reg: 10  	lose cover RAM: -12M",
"*BAD*gran_size: 64K 	chunk_size: 128M 	num_reg: 10  	lose cover RAM: -12M",
"*BAD*gran_size: 64K 	chunk_size: 256M 	num_reg: 10  	lose cover RAM: -12M",
"init_memory_mapping: [mem 0xc9d67000-0xc9d68fff]",
" [mem 0xc9d67000-0xc9d68fff] page 4k",
"init_memory_mapping: [mem 0xc9d73000-0xc9f06fff]",
" [mem 0xc9d73000-0xc9f06fff] page 4k",
"init_memory_mapping: [mem 0xc9f0b000-0xc9f53fff]",
" [mem 0xc9f0b000-0xc9f53fff] page 4k",
"init_memory_mapping: [mem 0xc9f7a000-0xc9f7cfff]",
" [mem 0xc9f7a000-0xc9f7cfff] page 4k",
"init_memory_mapping: [mem 0xc9f7f000-0xc9f95fff]",
" [mem 0xc9f7f000-0xc9f95fff] page 4k",
"init_memory_mapping: [mem 0xc9f9c000-0xc9fa3fff]",
" [mem 0xc9f9c000-0xc9fa3fff] page 4k",
"init_memory_mapping: [mem 0xc9fa5000-0xc9fb3fff]",
" [mem 0xc9fa5000-0xc9fb3fff] page 4k",
"init_memory_mapping: [mem 0xc9fb5000-0xc9fbffff]",
" [mem 0xc9fb5000-0xc9fbffff] page 4k",
"init_memory_mapping: [mem 0xc9fc5000-0xc9ff0fff]",
" [mem 0xc9fc5000-0xc9ff0fff] page 4k",
"init_memory_mapping: [mem 0xc9ff2000-0xca001fff]",
" [mem 0xc9ff2000-0xca001fff] page 4k",
"init_memory_mapping: [mem 0xca029000-0xca03cfff]",
" [mem 0xca029000-0xca03cfff] page 4k",
"init_memory_mapping: [mem 0xca03e000-0xca03efff]",
" [mem 0xca03e000-0xca03efff] page 4k",
"init_memory_mapping: [mem 0xca041000-0xca041fff]",
" [mem 0xca041000-0xca041fff] page 4k",
"init_memory_mapping: [mem 0xca047000-0xca05dfff]",
" [mem 0xca047000-0xca05dfff] page 4k",
"init_memory_mapping: [mem 0xca887000-0xca887fff]",
" [mem 0xca887000-0xca887fff] page 4k",
"init_memory_mapping: [mem 0xca8cb000-0xcacd7fff]",
" [mem 0xca8cb000-0xca9fffff] page 4k",
" [mem 0xcaa00000-0xcabfffff] page 2M",
" [mem 0xcac00000-0xcacd7fff] page 4k",
"	Offload RCU callbacks from CPUs: 0-7.",
"vt handoff: transparent VT on vt#7",
"Console: colour dummy device 80x25",
"console [tty0] enabled",
"hpet clockevent registered",
"tsc: Fast TSC calibration using PIT",
"tsc: Detected 2394.543 MHz processor",
"Calibrating delay loop (skipped), value calculated using timer frequency.. 4789.08 BogoMIPS (lpj=9578172)",
"pid_max: default: 32768 minimum: 301",
"ACPI: Core revision 20141107",
"ACPI: All ACPI Tables successfully acquired",
"Security Framework initialized",
"AppArmor: AppArmor initialized",
"Yama: becoming mindful.",
"Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes)",
"Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes)",
"Mount-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Mountpoint-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Initializing cgroup subsys memory",
"Initializing cgroup subsys devices",
"e820: reserve RAM buffer [mem 0xc9fc0000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9ff1000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca002000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca03d000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca03f000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca042000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca05e000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca888000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcacd8000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcb000000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0x42f200000-0x42fffffff]",
"NetLabel: Initializing",
"NetLabel:  domain hash size = 128",
"NetLabel:  protocols = UNLABELED CIPSOv4",
"NetLabel:  unlabeled traffic allowed by default",
"hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0, 0, 0, 0, 0, 0",
"hpet0: 8 comparators, 64-bit 14.318180 MHz counter",
"Switched to clocksource hpet",
"AppArmor: AppArmor Filesystem Enabled",
"pnp: PnP ACPI init",
"system 00:00: [mem 0xfed40000-0xfed44fff] has been reserved",
"system 00:00: Plug and Play ACPI device, IDs PNP0c01 (active)",
"system 00:01: [io  0x0680-0x069f] has been reserved",
"systemd[1]: Listening on /dev/initctl Compatibility Named Pipe.",
"systemd[1]: Starting /dev/initctl Compatibility Named Pipe.",
"systemd[1]: Starting udev Coldplug all Devices...",
"systemd[1]: Starting Create list of required static device nodes for the current kernel...",
"systemd[1]: Created slice system-getty.slice.",
"systemd[1]: Starting system-getty.slice.",
"systemd[1]: Created slice User and Session Slice.",
"systemd[1]: Starting User and Session Slice.",
"systemd[1]: Reached target Slices.",
"systemd[1]: Starting Slices.",
"Bluetooth: Core ver 2.20",
"iwlwifi 0000:03:00.0: CONFIG_IWLWIFI_DEBUG disabled",
"iwlwifi 0000:03:00.0: CONFIG_IWLWIFI_DEBUGFS enabled",
"iwlwifi 0000:03:00.0: CONFIG_IWLWIFI_DEVICE_TRACING enabled",
"NET: Registered protocol family 31",
"Bluetooth: HCI device and connection manager initialized",
"iwlwifi 0000:03:00.0: Detected Intel(R) Centrino(R) Wireless-N 2230 BGN, REV=0xC8",
"Bluetooth: HCI socket layer initialized",
"Bluetooth: L2CAP socket layer initialized",
"Bluetooth: SCO socket layer initialized",
"iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled",
"Linux video capture interface: v2.00",
"usbcore: registered new interface driver btusb",
"intel_rapl: Found RAPL domain package",
"vboxdrv: Found 8 processor cores.",
"vboxdrv: fAsync=0 offMin=0x165 offMax=0x24ab",
"vboxdrv: TSC mode is 'synchronous', kernel timer mode is 'normal'.",
"vboxdrv: Successfully loaded version 4.3.26_Ubuntu (interface 0x001a000a).",
"vboxpci: IOMMU not found (not registered)",
"ip_tables: (C) 2000-2006 Netfilter Core Team",
"ip6_tables: (C) 2000-2006 Netfilter Core Team",
"Ebtables v2.0 registered",
"bridge: automatic filtering via arp/ip/ip6tables has been deprecated. Update your scripts to load br_netfilter if you need this.",
"device virbr0-nic entered promiscuous mode",
"nf_conntrack version 0.5.0 (16384 buckets, 65536 max)",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered disabled state",
"Initialising...", ""];

})(jQuery);

 
