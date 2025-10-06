import { useTranslations, useLocale } from 'next-intl';
import styles from './page.module.css';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <main className={styles.container}>
      <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: '#999' }}>
        Current locale: {locale}
      </div>
      <h1 className={styles.title}>
        {t('title')}
      </h1>
      <p className={styles.subtitle}>
        {t('subtitle')}
      </p>
      <p className={styles.description} style={{ color: '#666' }}>
        {t('description')}
      </p>
    </main>
  );
}
