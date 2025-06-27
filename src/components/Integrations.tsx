
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    { name: 'Google Sheets', logo: 'https://www.google.com/images/branding/product/2x/sheets_2020q4_48dp.png' },
    { name: 'Gmail', logo: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico' },
    { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png' },
    { name: 'Mailchimp', logo: 'https://eep.io/images/yzco4xsimv0y/7NQGwRbI8VWwJUrqGDhOOV/7bb0f90c25eb9c85c2a0e4d1f6e1f6e2/Mailchimp_Logo_Mark_Black.png' },
    { name: 'Google Calendar', logo: 'https://calendar.google.com/googlecalendar/images/favicon_v2014_32.ico' },
    { name: 'Facebook', logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/wrCiWd_JmQe.png' },
    { name: 'Instagram', logo: 'https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png' },
    { name: 'WhatsApp', logo: 'https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png' },
    { name: 'WooCommerce', logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png' },
    { name: 'Zapier', logo: 'https://cdn.zapier.com/zapier/images/logos/zapier-logomark.png' },
    { name: 'Trello', logo: 'https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png' },
    { name: 'Twitter', logo: 'https://abs.twimg.com/favicons/twitter.2.ico' },
    { name: 'YouTube', logo: 'https://www.youtube.com/s/desktop/f506bd45/img/favicon_32x32.png' },
    { name: 'Dropbox', logo: 'https://cfl.dropboxstatic.com/static/images/favicon.ico' },
    { name: 'Shopify', logo: 'https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_logo_2018.png?v=1534236203' },
    { name: 'Discord', logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png' },
    { name: 'Salesforce', logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/nav/salesforce-logo.png' },
    { name: 'Microsoft Excel', logo: 'https://res.cdn.office.net/assets/mail/file-icon/png/xl_16x16.png' },
    { name: 'WordPress', logo: 'https://s.w.org/favicon.ico' },
    { name: 'Google Drive', logo: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
    { name: 'Twilio', logo: 'https://www.twilio.com/content/dam/twilio-com/global/en/blog/legacy/2017/Twilio_logo_red.png' },
    { name: 'PayPal', logo: 'https://www.paypalobjects.com/webstatic/icon/pp258.png' },
    { name: 'Stripe', logo: 'https://js.stripe.com/v3/fingerprinted/img/favicon-32x32.png' },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/favicon.ico' },
    { name: 'Notion', logo: 'https://www.notion.so/images/favicon.ico' },
    { name: 'Airtable', logo: 'https://static.airtable.com/images/favicon/favicon-32x32.png' },
    { name: 'Zoom', logo: 'https://st1.zoom.us/zoom.ico' },
    { name: 'Microsoft Teams', logo: 'https://statics.teams.cdn.office.net/hashedassets-launcher/launcher_20201208.02_p1.ico' },
    { name: 'Asana', logo: 'https://d3eizkexujvlb4.cloudfront.net/favicon.ico' },
    { name: 'Jira', logo: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon-32x32.png' }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">التكامل</h2>
        <p className="text-xl text-gray-600 mb-8">تكامل سلس مع أهم المنصات والأدوات التقنية العالمية</p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.03
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-2xl font-bold text-gray-800">200+ تكامل متاح</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
