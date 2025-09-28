import NewsletterStickyBar from '../NewsletterStickyBar';

export default function NewsletterStickyBarExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Newsletter Sticky Bar Demo</h1>
        <p>Scroll down to see the sticky newsletter bar at the bottom of the page.</p>
        
        {/* Add some content to demonstrate scrolling */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="p-6 bg-card rounded-lg border">
            <h2 className="text-xl font-semibold mb-2">Sample Content {i + 1}</h2>
            <p className="text-muted-foreground">
              This is sample content to demonstrate the sticky newsletter bar functionality. 
              The newsletter bar should remain fixed at the bottom of the screen as you scroll.
            </p>
          </div>
        ))}
      </div>
      
      <NewsletterStickyBar />
    </div>
  );
}