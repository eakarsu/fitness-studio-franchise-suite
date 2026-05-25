# Fitness Studio Franchise Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIFitnessStudioFranchiseAssistant`
- `AIFitnessStudioFranchiseOperations`
- `AIFitnessStudioFranchiseAnalytics`
- `AIFitnessStudioFranchiseWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/fitness-studio-franchise-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5240`

Seeded users:
- `admin@fitness-studio-franchise.local / admin123`
- `manager@fitness-studio-franchise.local / manager123`
- `analyst@fitness-studio-franchise.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/fitness-studio-franchise-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5240 npm run smoke
```
