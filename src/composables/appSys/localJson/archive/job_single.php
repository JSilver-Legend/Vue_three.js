REX_TEMPLATE[1]


<div class="page-container">

    <?PHP
        $slice = rex_article_slice::getFirstSliceForArticle($this->getValue('article_id'));

        if ($slice->getValue(5) != "") {
            $nsdate = strtotime($slice->getValue(5));
            $tag_zahl = MDT::GetDate($nsdate, 'd');
            $tag_full = MDT::GetInfo($nsdate, 'weekday', false, true);
            $tag_short = MDT::GetInfo($nsdate, 'weekday', false, false);
            $monat_zahl = MDT::GetInfo($nsdate, 'month');
            $monat_full = MDT::GetInfo($nsdate, 'month', false, true);
            $monat_short = MDT::GetInfo($nsdate, 'month', false, false);
            $jahr = MDT::GetDate($nsdate, 'Y');

            //$datum_full_month = $tag_zahl.". ".$monat_full." ".$jahr;
            $ausgabe = $tag_zahl . ". " . $monat_full . " " . $jahr;
            //$datum_short_month = $tag_full.", ".$tag_zahl.". ".$monat_short." ".$jahr;
        }

        $permanent = getSliceValue($slice, '1.7');
        //var_export($permanent);
        if ($permanent == 1) {
            $ausgabe = '{{Dauerausschreibung}}';
        }
     ?>

    <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "JobPosting",
          "title": "<?PHP echo getSliceValue($slice, '1.1'); ?>",
          "description": "<?PHP echo getSliceValue($slice, '1.2'); ?>",
          "identifier": {
            "@type": "PropertyValue",
            "name": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'Hillebrand Coating';}
                if ($bereich == 'heo') {echo 'HEO Coating';}?>",
            "value": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'Rudolf Hillebrand GmbH & Co. KG';}
                if ($bereich == 'heo') {echo 'Hillebrand Erbslöh Oberflächen GmbH';}?>"
          },
          "hiringOrganization" : {
            "@type": "Organization",
            "name": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'Hillebrand Coating';}
                if ($bereich == 'heo') {echo 'HEO Coating';}?>",
            "sameAs": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'https://www.hillebrand-coating.com';}
                if ($bereich == 'heo') {echo 'https://www.heo-coating.com';}?>",
            "logo": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'https://www.hillebrand-coating.com/google/hillebrand-coating-logo.jpg';}
                if ($bereich == 'heo') {echo 'https://www.heo-coating.com/img/heo-coating-logo.jpg';}?>"
          },
          "industry": "Oberflächenindustrie",
          "employmentType": "FULL_TIME",
          "workHours": "shift",
          "datePosted": "<?PHP $datum=$slice->getValue(5);
                $jahr = substr($datum,6,4);
                $mon  = substr($datum,3,2);
                $tag  = substr($datum,0,2);
                $datneu = $jahr.'-'.$mon.'-'.$tag;
                echo $datneu;
                ?>",
          "validThrough": "<?PHP $datumf=$slice->getValue(11);
                $jahrf = (substr($datumf,6,4));
                $monf  = (substr($datumf,3,2));
                $tagf  = substr($datumf,0,2);
                $datneuf = $jahrf.'-'.$monf.'-'.$tagf;
                echo $datneuf;
                ?>",
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "<?PHP $bereich = getSliceValue($slice, '1.4');if ($bereich == 'hc') {echo 'Westerhaar 60';}
                if ($bereich == 'heo') {echo 'Max-Planck-Strasse 8';}?>",
              "addressLocality": "Wickede (Ruhr)",
              "postalCode": "58739",
              "addressCountry": "DE"
            }
          },
          "responsibilities": "<?PHP echo $slice->getValue(4); ?>",
          "skills": "<?PHP echo $slice->getValue(8); ?>"
        }
    </script>

    <section class="section-home-primary bt_one_four_zero">
        <section class="main-slider2 ">
            <div id="rev_slider_466_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container"
                 data-alias="car-dealership" data-source="gallery"
                 style="margin:0px auto;background-color:transparent;padding:0px;margin-bottom:0px;">

                <div id="rev_slider_466_1" class="rev_slider fullwidthabanner" style="display:none;" data-delay="5000"
                     data-masterspeed="1500"
                     data-version="5.4.1">
                    <ul>    <!-- SLIDE  -->
                        <li data-index="index1" data-transition="slideremovehorizontal" data-slotamount="default"
                            data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power1.easeInOut"
                            data-easeout="Power1.easeInOut" data-masterspeed="800"

                            data-rotate="0" data-fstransition="fade" data-fsmasterspeed="800" data-fsslotamount="7"
                            data-saveperformance="off" data-title="Slide" data-param1="" data-param2=""
                            data-param3=""
                            data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                            data-param9=""
                            data-param10="" data-description="">

                            <img src="/resources/media/global/dummy.png" alt="" data-lazyload="/media/<?PHP

                            $image1=$slice->getMedia(1);
                            $image2=$slice->getMedia(2);

                            if ($image2 == "") {
                                echo $image1;
                            } else {
                                echo $image2;
                            } ?>"
                                 data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                 data-bgparallax="5" class="rev-slidebg" data-no-retina>
                            <!-- LAYERS -->

                            <div class="tp-caption tp-resizeme"
                                 id="slide-1587-layer-bg"
                                 data-x="['left','left','left','left','left']" data-hoffset="['0','0','0','0','0']"
                                 data-y="['top','top','top','top','top']" data-voffset="['0','0','0','0','0']"

                                 data-width="['full','full','full','full','full']"
                                 data-height="['full','full','full','full','full']"
                                 data-whitespace="nowrap"

                                 data-type="text"
                                 data-basealign="slide"
                                 data-responsive_offset="on"

                                 data-frames='[{"from":"x:left(L);","speed":800,"to":"o:1;","delay":0,"ease":"Power1.easeInOut"},{"delay":"wait","speed":800,"to":"x:left(R);","ease":"Power1.easeInOut"}]'
                                 data-textAlign="['left','left','left','left']"
                                 data-paddingtop="[0,0,0,0,0]"
                                 data-paddingright="[30,30,30,30,30]"
                                 data-paddingbottom="[10,10,10,10,5]"
                                 data-paddingleft="[30,30,30,30,30]"

                                 style="z-index: 4; background-color: rgba(0, 0, 0, .40);border-width:0px;">
                            </div>

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption   tp-resizeme font-third"
                                 id="slide-1587-layer-1"
                                 data-x="['left','left','left','left','left']" data-hoffset="['250','30','20','10','0']"
                                 data-y="['top','top','top','top','top']" data-voffset="['180','180','120','100','90']"
                                 data-fontsize="['54','48','48','48','24']"
                                 data-lineheight="['70','50','50','50','50']"
                                 data-width="none"
                                 data-whitespace="nowrap"
                                 data-visibility="['on','on','on','on','on']"

                                 data-type="text"
                                 data-basealign="slide"
                                 data-responsive_offset="on"

                                 data-frames='[{"from":"x:left(L);","speed":800,"to":"o:1;","delay":0,"ease":"Power1.easeInOut"},{"delay":"wait","speed":800,"to":"x:left(R);","ease":"Power1.easeInOut"}]'
                                 data-textAlign="['left','left','left','left','left']"
                                 data-paddingtop="[0,0,0,0,0]"
                                 data-paddingright="[30,30,30,30,30]"
                                 data-paddingbottom="[10,10,10,10,5]"
                                 data-paddingleft="[30,30,30,30,30]"

                                 style="z-index: 5; white-space: nowrap; color: rgba(255, 255, 255, 1.00);border-width:0px;">
                                {{STELLENANGEBOTE}}
                            </div>



                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption   tp-resizeme font-third"
                                 id="slide-1587-layer-2"
                                 data-x="['left','left','left','left','left']" data-hoffset="['250','30','21','12','3']"
                                 data-y="['top','top','top','top','top']" data-voffset="['220','195','140','128','110']"
                                 data-fontsize="['14','14','14','14','14']"
                                 data-lineheight="['70','90','80','60','60']"
                                 data-width="none"

                                 data-whitespace="nowrap"
                                 data-type="text"
                                 data-basealign="slide"
                                 data-responsive_offset="on"

                                 data-frames='[{"from":"x:left(L);","speed":800,"to":"o:1;","delay":0,"ease":"Power1.easeInOut"},{"delay":"wait","speed":800,"to":"x:left(R);","ease":"Power1.easeInOut"}]'
                                 data-textAlign="['left','left','left','left','left']"
                                 data-paddingtop="[0,0,0,0,0]"
                                 data-paddingright="[30,30,30,30,30]"
                                 data-paddingbottom="[10,10,10,5,5]"
                                 data-paddingleft="[30,30,30,30,30]"

                                 style="z-index: 5; white-space: nowrap; color: rgba(255, 255, 255, 1.00);border-width:0px;">
                                {{KARRIERE}}
                            </div>




                        </li>

                    </ul>
                    <div class="tp-bannertimer tp-bottom" style=""></div>
                </div>
            </div>


        </section>

        <section class="section-about pt-eight-zero">
            <div class="container">

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8">

                        <div class="b-blog-post" style="margin-top:20px;">
                            <div class="btn-back"><a href="<?PHP echo rex_getUrl(20); ?>"><i
                                        class="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i> {{zurück zur Übersicht}}</a>
                            </div>

                            <div class="b-blog-caption ">
                                <div class="caption-data customPseudoElBg">
                                    <span class="date"><?PHP echo $ausgabe; ?></span>
                                    <span class="author"><?PHP echo getSliceValue($slice, 1.5) ?></span>
                                </div>
                                <div class="b-text ">
                                    <p>
                                        {{Wir suchen ab sofort}}
                                    </p>
                                </div>
                                <div class="b-mod-heading ">
                                    <h1 class="font-hc">
                                        <strong><?PHP echo getSliceValue($slice, '1.1'); ?></span></strong>
                                    </h1>


                                </div>

                            </div>

                            <div class="b-text ">
                                <p>
                                    <?PHP echo getSliceValue($slice, '1.2'); ?>
                                </p>
                            </div>
                            <div class="container">
                                <div class="row" style="margin-top: 60px;">
                                    <div class="b-mod-heading ">
                                        <h5 class="">
                                            <?PHP if( getSliceValue($slice, '1.8')=="Sie"){ ?>
                                                <strong>{{Ihre Aufgaben}}</strong>
                                            <?PHP  } else { ?>
                                                <strong>{{Deine Aufgaben}}</strong>
                                            <?PHP  } ?>
                                        </h5>


                                    </div>


                                    <div class="b-list l-chevron bewerbungsportal">
                                        <?PHP
                                        if ($slice->getValue(4)) {
                                            // Parse text with Textile
                                            $textile = markitup::parseOutput('textile', $slice->getValue(4));
                                            // Use Bold-Tags to enable Bootstrap-Labels
                                            //echo str_replace('</p>', '', $textile);
                                            echo $textile;
                                        }
                                        ?>
                                    </div>


                                </div>
                                <div class="row" style="margin-top: 60px;">
                                    <div class="b-mod-heading ">
                                        <h5 class="">
                                            <?PHP if( getSliceValue($slice, '1.8')=="Sie"){ ?>
                                                <strong>{{Ihr Profil}}</strong>
                                            <?PHP  } else { ?>
                                                <strong>{{Dein Profil}}</strong>
                                            <?PHP  } ?>

                                        </h5>


                                    </div>


                                    <div class="b-list l-chevron bewerbungsportal">
                                        <?PHP
                                        if ($slice->getValue(8)) {
                                            // Parse text with Textile
                                            $textile = markitup::parseOutput('textile', $slice->getValue(8));
                                            // Use Bold-Tags to enable Bootstrap-Labels
                                            //echo str_replace('</p>', '', $textile);
                                            echo $textile;
                                        }
                                        ?>
                                    </div>


                                </div>
                                <div class="row" style="margin-top: 60px;margin-bottom: 80px;">
                                    <div class="b-mod-heading ">
                                        <h5 class="">
                                            <?PHP if( getSliceValue($slice, '1.8')=="Sie"){ ?>
                                                <strong>{{Was wir Ihnen bieten}}</strong>
                                            <?PHP  } else { ?>
                                                <strong>{{Was wir dir bieten}}</strong>
                                            <?PHP  } ?>
                                        </h5>


                                    </div>


                                    <div class="b-list l-chevron bewerbungsportal">
                                        <?PHP
                                        if ($slice->getValue(9)) {
                                            // Parse text with Textile
                                            $textile = markitup::parseOutput('textile', $slice->getValue(9));
                                            // Use Bold-Tags to enable Bootstrap-Labels
                                            //echo str_replace('</p>', '', $textile);
                                            echo $textile;
                                        }
                                        ?>
                                    </div>


                                </div>
                                <div>
                                    <p>
                                        <?PHP


                                        if ($slice->getValue(10)) {
                                            // Parse text with Textile
                                            $textile = markitup::parseOutput('textile', $slice->getValue(10));
                                            // Use Bold-Tags to enable Bootstrap-Labels
                                            //echo str_replace('</p>', '', $textile);
                                            echo $textile;
                                        }


                                        ?>
                                    </p>
                                </div>
                            </div>

                            <div style="margin-top: 30px; margin-bottom: 120px;">
                                <a class="typeform-share button" href="<?PHP echo getSliceValue($slice, '1.6'); ?>" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#dd2626;color:white;cursor:pointer;font-family:Roboto,sans-serif;font-size:19px;line-height:47.5px;text-align:center;margin:0;height:47.5px;padding:0px 31px;border-radius:0px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank">{{Online-Bewerbung starten}} </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>

                            </div>

                        </div>
                    </div>

                </div>


        </section>
    </section>
</div>
REX_TEMPLATE[2]

</body>
</html>


